import React, { useState, useEffect } from "react";
import "./Career.css"
import { Tag, Row, Col, Modal, Form, Input, Select, Button, message, Upload, Checkbox, notification } from "antd";
import TopPartCommon from "../CommonUsedComponents/TopBarContainer/TopPartCommon";
import { IoMdDoneAll } from "react-icons/io";
const Career = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedPositionTitle, setSelectedPositionTitle] = useState("");
    const [form] = Form.useForm();
    const [agreed, setAgreed] = useState(false);
    const [resumeLink, setResumeLink] = useState(""); // store uploaded URL
    const [formData, setFormData] = useState(null);
    const [uploadKey, setUploadKey] = useState(Date.now());

    const apibaseUrl = import.meta.env.VITE_BASE_URL;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const showModal = (title) => {
        setSelectedPositionTitle(title);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        form.resetFields();   
        setIsModalVisible(false);
        setSelectedPositionTitle("");
    };

    const ListPoints = [
        {
            title: "Comprehensive Benefits Package",
            content: "Including health insurance, retirement plans, and paid time off"
        },
        {
            title: "Flexible Work Options",
            content: "Hybrid and remote work opportunities to fit your lifestyle"
        },
        {
            title: "A Culture of Innovation",
            content: "Collaborate with passionate professionals dedicated to pushing boundaries"
        }
    ]

    const CareerPositions = [
        {
            positionTitle: "Senior Recruitment Consultant",
            positionDescription:
                "Responsible for managing client relationships, sourcing top talent, and mentoring junior consultants. Must have strong industry knowledge and proven placement track record.",
            positionTag: ["Full Time", "On-Site"]
        },
        {
            positionTitle: "Technical Recruitment Specialist",
            positionDescription:
                "Focus on hiring IT and tech roles. Should have experience working with developer, QA, and DevOps profiles. Understanding of tech stacks and developer communities is a must.",
            positionTag: ["Remote", "Full Time"]
        },
        {
            positionTitle: "Recruitment Consultant – BFSI Sector",
            positionDescription:
                "Expertise in banking, financial services, and insurance recruitment. Responsible for end-to-end hiring and building talent pipelines for BFSI clients.",
            positionTag: ["Full Time", "Hybrid"]
        },
        {
            positionTitle: "Executive Search Consultant",
            positionDescription:
                "Specializes in leadership and CXO-level hiring. Strong communication and negotiation skills needed. Experience with retained search is preferred.",
            positionTag: ["Full Time", "On-Site"]
        },
        {
            positionTitle: "Junior Recruitment Consultant",
            positionDescription:
                "Assist in candidate sourcing, screening, and coordinating interviews. Ideal for freshers or those with 1-2 years experience in HR or recruitment.",
            positionTag: ["Full Time", "Remote"]
        }
    ];
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
    // useEffect(() => {
    //     console.log("formData",formData)
    // }, []);


    return (
        <>
            <div id="CareerContainer">
                <div>
                    <TopPartCommon
                        tag="Careers"
                        title="Join Our Team "
                        highlight="Careers"
                        subtitle="Shape your future with Sanguine Recruitment—where your growth, passion, and potential are valued. Discover opportunities to thrive, innovate, and make a real impact with us."
                    />
                </div>
                <div className="hero-home-content">
                    <div>
                        <div className="AboutCareer marginTop">
                            <Row>
                                <Col lg={12} md={24}>
                                    <div className="CareerAboutContentContainer">
                                        <div>
                                            <h1 className="big-title">Be part of something bigger: build <span className="span-title">your career with us</span></h1>
                                            <p>At Linkrow, we believe that our people are our greatest asset. We're not just offering jobs; we're building careers. Join a team where innovation meets collaboration, and every day brings new opportunities to grow and succeed.</p>
                                            <br />
                                            <p><b>What we offer</b></p>
                                            {ListPoints.map((item, index) => (
                                                <div className="ContentCardCareer" key={index}>
                                                    <p key={index}> <IoMdDoneAll />{item.title}</p>
                                                    <p>{item.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={24}>
                                    <div className="CareerSectionImage">
                                        <div>
                                            <img src="https://images.unsplash.com/photo-1575603760088-05ae2e4c0ab3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="CareerPositionCard paddingSection">
                            <div>
                                <div className="HeaderPartCenter">
                                    <Tag>Career</Tag>
                                    <h2 className="big-title" style={{ textAlign: "center", marginBottom: "0px" }}>
                                        Join our team and shape <br /> the <span className="span-title">future together</span>
                                    </h2>
                                </div>
                            </div>
                            <br /><br />
                            <div>
                                <Row>
                                    {CareerPositions.map((item, index) => (
                                        <Col lg={12} md={12} key={index}>
                                            <div className="CareerCardDesign" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 300}>
                                                <div>
                                                    <h2 style={{ marginTop: "0px" }}>{item.positionTitle}</h2>
                                                    <p>{item.positionDescription}</p>
                                                    <div style={{ marginTop: "10px" }}>
                                                        {item.positionTag.map((tag, index) => (
                                                            <Tag key={index} color="blue">{tag}</Tag>
                                                        ))}
                                                    </div>
                                                    <br />
                                                    <button
                                                        className="slide-btn consultation"
                                                        style={{ minWidth: "150px", padding: "10px 15px", fontSize: "15px" }}
                                                        onClick={() => showModal(item.positionTitle)}
                                                    >
                                                        Apply now
                                                    </button>

                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <Modal
                                    title={`Apply for: ${selectedPositionTitle}`}
                                    open={isModalVisible}
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
                                                applyingFor: selectedPositionTitle,
                                                resumeUrl: resumeLink,
                                            };
                                            setFormData(fullData);
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
                                                    setIsModalVisible(false);
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

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Career