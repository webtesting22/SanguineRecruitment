import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, message, Upload, Checkbox, notification } from "antd";

const CareerApplicationModal = ({ 
    isVisible, 
    onCancel, 
    positionTitle = "General Application"
}) => {
    const [form] = Form.useForm();
    const [agreed, setAgreed] = useState(false);
    const [resumeLink, setResumeLink] = useState(""); // store uploaded URL
    const [uploadKey, setUploadKey] = useState(Date.now());

    const handleResumeChange = async (info) => {
        const file = info?.file?.originFileObj || info?.fileList?.[0]?.originFileObj;

        if (!file) {
            console.log("❌ No valid file found:", info);
            return;
        }

        console.log("📁 File selected:", file.name);

        const isValidType = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type);
        const isValidSize = file.size <= 1 * 1024 * 1024;

        if (!isValidType) {
            message.error("Only PDF or DOCX files are allowed!");
            return;
        }
        if (!isValidSize) {
            message.error("File must be less than 1MB!");
            return;
        }

        try {
            const response = await fetch(`https://testapi.prepseed.com/chats/uploadPolicy`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWJkNGM4YWQ3NzczMjc5YzVhZTM4MCIsInJvbGUiOiJtb2RlcmF0b3IiLCJleHAiOjE3MzAwMjc4MzksInBocyI6e30sImlhdCI6MTcyNDg0MzgzOH0.gNjc_Z5LD9vqtZ7V15CQhXsAdXrhbW9OEwOMEDz7MMg`,
                },
                body: JSON.stringify({
                    fileName: encodeURIComponent(file.name),
                    mime: file.type,
                    acl: "public-read",
                }),
            });

            const data = await response.json();
            console.log("🧾 Upload policy response:", data);

            if (data?.data?.fields && data?.data?.url) {
                const formData = new FormData();
                Object.entries(data.data.fields).forEach(([key, value]) => formData.append(key, value));
                formData.append("file", file);

                const uploadResponse = await fetch(data.data.url, {
                    method: "POST",
                    body: formData,
                });

                if (uploadResponse.ok) {
                    const finalUrl = `${data.data.url}/${encodeURIComponent(data.filePath)}`;
                    notification.success({
                        message: "Document Uploaded",
                        description: `${file.name} was uploaded successfully.`,
                        placement: "topRight",
                    });
                    setResumeLink(finalUrl);
                    message.success("Resume uploaded successfully!");
                } else {

                    message.error("S3 upload failed");
                    notification.error({
                        message: "Upload Failed",
                        description: "The document could not be uploaded to the server.",
                        placement: "topRight",
                    });
                }
            } else {
                message.error("Upload policy generation failed");
                notification.error({
                    message: "Unexpected Error",
                    description: "Something went wrong during the document upload.",
                    placement: "topRight",
                });
            }
        } catch (error) {
            console.error("Upload error:", error);
            message.error("Unexpected error during resume upload");
        }
    };

    const handleResumeRemove = () => {
        setResumeLink("");
        setUploadKey(Date.now());
        notification.info({
            message: "Document Removed",
            description: "Your uploaded resume has been removed.",
            placement: "topRight",
        });
    };

    const handleCancel = () => {
        form.resetFields();
        setAgreed(false);
        setResumeLink("");
        setUploadKey(Date.now());
        onCancel();
    };

    return (
        <Modal
            title={`Apply for: ${positionTitle}`}
            open={isVisible}
            onCancel={handleCancel}
            footer={null}
            width={1000}
            className="sanguine-application-modal"
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={async (values) => {
                    const fullData = {
                        ...values,
                        applyingFor: positionTitle,
                        resumeUrl: resumeLink,
                    };
                    try {
                        const response = await fetch("https://testapi.prepseed.com/sanguineRecruitment/createCareerApplication", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(fullData),
                        });

                        if (response.ok) {
                            message.success("Application submitted successfully!");
                            form.resetFields();
                            setAgreed(false);
                            setResumeLink("");
                            setUploadKey(Date.now());
                            onCancel();
                        } else {
                            const error = await response.json();
                            message.error(error.message || "Failed to submit application.");
                        }
                    } catch (error) {
                        console.error("Submit error:", error);
                        message.error("An error occurred while submitting the application.");
                    }
                }}
            >
                <Form.Item
                    name="fullName"
                    label="Full Name"
                    normalize={(value) => value?.trimStart()} // trim only leading spaces on input, optional
                    rules={[
                        { required: true, message: "Please enter your full name" },
                        {
                            validator: (_, value) => {
                                if (!value || !value.trim()) {
                                    return Promise.reject(new Error("Name cannot be empty or just spaces"));
                                }
                                const trimmedValue = value.trim();
                                if (!/^[A-Za-z\s]+$/.test(trimmedValue)) {
                                    return Promise.reject(new Error("Name can only contain letters and spaces"));
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                >
                    <Input placeholder="Enter your full name" />
                </Form.Item>


                <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email" }, { type: "email", message: "Invalid email format" }]}>
                    <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                    name="mobileNumber"
                    label="Mobile Number"
                    rules={[
                        { required: true, message: "Please enter your mobile number" },
                        {
                            validator: (_, value) =>
                                value && /^\d{10}$/.test(value)
                                    ? Promise.resolve()
                                    : Promise.reject(new Error("Mobile number must be exactly 10 digits")),
                        },
                    ]}
                    normalize={(value) => value?.trim()}
                >
                    <Input
                        placeholder="Enter your 10-digit mobile number"
                        maxLength={10}
                        type="text" // Important: no arrows
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        onPaste={(event) => {
                            // Allow only digits on paste
                            const paste = (event.clipboardData || window.clipboardData).getData('text');
                            if (!/^\d*$/.test(paste)) {
                                event.preventDefault();
                            }
                        }}
                    />
                </Form.Item>


                <Form.Item name="currentLocation" label="Current Location (City & State)" rules={[{ required: true, message: "Please enter your location" }]}>
                    <Input placeholder="Enter location" />
                </Form.Item>

                <Form.Item name="willingToRelocate" label="Willing to Relocate?" rules={[{ required: true, message: "Please select an option" }]}>
                    <Select placeholder="Select">
                        <Select.Option value={true}>Yes</Select.Option>
                        <Select.Option value={false}>No</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    key={uploadKey}
                    name="resume"
                    label="Resume (PDF or DOCX only, Max 1MB)"
                    rules={[{ required: true, message: "Please upload your resume!" }]}
                >
                    <Upload
                        accept=".pdf,.docx"
                        beforeUpload={() => false}
                        maxCount={1}
                        showUploadList={true}
                        onChange={handleResumeChange}
                        onRemove={handleResumeRemove}
                    >
                        <Button>Click to Upload</Button>
                    </Upload>
                </Form.Item>


                <Form.Item name="linkedInProfileUrl" label="LinkedIn Profile URL" rules={[{ required: true, message: "Please enter LinkedIn URL" }]}>
                    <Input placeholder="Enter URL" />
                </Form.Item>

                <Form.Item name="portfolioUrl" label="Portfolio URL (optional)">
                    <Input placeholder="Enter URL" />
                </Form.Item>

                <Form.Item name="highestQualification" label="Highest Qualification" rules={[{ required: true, message: "Please enter your qualification" }]}>
                    <Input placeholder="Enter your highest qualification" />
                </Form.Item>

                <Form.Item name="currentJobTitle" label="Current Job Title" rules={[{ required: true, message: "Please enter your job title" }]}>
                    <Input placeholder="Enter your Job Title" />
                </Form.Item>

                <Form.Item name="currentCompany" label="Current Company (optional)">
                    <Input placeholder="Enter company name" />
                </Form.Item>

                <Form.Item name="totalExperienceYears" label="Total Experience (Years)" rules={[{ required: true, message: "Please enter total years of experience" }]}>
                    <Input type="number" placeholder="Enter total years of experience" min={0} />
                </Form.Item>

                <Form.Item name="currentCTC" label="Current CTC (in numbers)" rules={[{ required: true, message: "Please enter current CTC" }]}>
                    <Input type="number" placeholder="Enter CTC" min={0} />
                </Form.Item>

                <Form.Item name="expectedCTC" label="Expected CTC (in numbers)" rules={[{ required: true, message: "Please enter expected CTC" }]}>
                    <Input type="number" placeholder="Enter expected CTC" min={0} />
                </Form.Item>

                <Form.Item name="noticePeriodDays" label="Notice Period (in days)" rules={[{ required: true, message: "Please enter notice period" }]}>
                    <Input type="number" placeholder="Enter notice period" min={0} />
                </Form.Item>

                <Form.Item name="engagementType" label="Engagement Type" rules={[{ required: true, message: "Please select engagement type" }]}>
                    <Select placeholder="Select type">
                        <Select.Option value="In-office">In-office</Select.Option>
                        <Select.Option value="Remote">Remote</Select.Option>
                        <Select.Option value="Hybrid">Hybrid</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="keySkills" label="Key Skills" rules={[{ required: true, message: "Please enter key skills" }]}>
                    <Input placeholder="Enter your skills" />
                </Form.Item>

                <Form.Item name="anyOtherInformation" label="Any Other Information (optional)">
                    <Input.TextArea rows={3} placeholder="Enter any other information" />
                </Form.Item>

                <Form.Item>
                    <Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)}>
                        I agree to share my details with Sanguine Recruitment for job opportunities.
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={!agreed} block>
                        Submit Application
                    </Button>
                </Form.Item>

            </Form>
        </Modal>
    );
};

 

export default CareerApplicationModal;