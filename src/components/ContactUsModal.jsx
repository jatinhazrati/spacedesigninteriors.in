import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useState } from "react";

const INITIAL_CONTACT_DETAILS = {
  Name: "",
  ContactNumber: "",
  City: "",
  ProjectType: "",
  ProjectArea: "",
  Budget: "",
  Requirements: "",
};

const ContactUsModal = ({ showContactUsModal, setShowContactUsModal }) => {
  const [contactDetails, setContactDetails] = useState(INITIAL_CONTACT_DETAILS);

  const handleChange = (event) => {
    setContactDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onCloseModal = () => {
    setShowContactUsModal(false);
    setContactDetails(INITIAL_CONTACT_DETAILS);
  };

  return (
    <Modal
      position="center"
      show={showContactUsModal}
      size="2xl"
      onClose={onCloseModal}
      popup
    >
      <Modal.Header />
      <Modal.Body>
        <form
          className="space-y-6"
          acceptCharset="UTF-8"
          action="https://public.herotofu.com/v1/8c16e760-c997-11ee-b355-cff7da8a1e7a"
          method="POST"
        >
          <h3 className="text-display-xs font-medium text-black">
            Request Callback
          </h3>
          <div className="flex gap-4">
            <div className="w-6/12">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name*" />
              </div>
              <TextInput
                id="name"
                name="Name"
                placeholder="Enter Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-6/12">
              <div className="mb-2 block">
                <Label htmlFor="contactNumber" value="Contact No.*" />
              </div>
              <TextInput
                id="contactNumber"
                name="ContactNumber"
                placeholder="Enter Contact Number"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-6/12">
              <div className="mb-2 block">
                <Label htmlFor="city" value="City" />
              </div>
              <Select id="city" name="City" onChange={handleChange} required>
                <option value="">Select City</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
                <option value="Sohna">Sohna (Gurugram)</option>
                <option value="Palwal">Palwal (Faridabad)</option>
                <option value="Others">Others</option>
              </Select>
            </div>
            <div className="w-6/12">
              <div className="mb-2 block">
                <Label htmlFor="projectType" value="Project Type" />
              </div>
              <Select
                id="projectType"
                name="ProjectType"
                onChange={handleChange}
                required
              >
                <option value="">Select Project Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Others">Others</option>
              </Select>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6/12">
              <div className="mb-2 block">
                <Label htmlFor="projectArea" value="Project Area" />
              </div>
              <Select
                id="projectArea"
                name="ProjectArea"
                onChange={handleChange}
                disabled={contactDetails.ProjectType ? false : true}
                required
              >
                <option value="">Select Project Type</option>
                {contactDetails.ProjectType === "Residential" ? (
                  <>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK">4 BHK</option>
                    <option value="Others">Others</option>
                  </>
                ) : (
                  <>
                    <option value="0 to 2000 sq. ft">0 to 2000 sq. ft</option>
                    <option value="2000 to 4000 sq. ft">
                      2000 to 4000 sq. ft
                    </option>
                    <option value="4000+ sq. ft">4000+ sq. ft</option>
                  </>
                )}
              </Select>
            </div>
            <div className="w-6/12">
              <div className="mb-2 block">
                <Label htmlFor="budget" value="Budget" />
              </div>
              <Select
                id="budget"
                name="Budget"
                onChange={handleChange}
                required
              >
                <option value="">Select Budget</option>
                <option value="0-10 Lacs">0 to 10 Lacs</option>
                <option value="10-20 Lacs">10 Lacs to 20 Lacs</option>
                <option value="20-50 Lacs">20 Lacs to 50 Lacs</option>
                <option value="50 Lacs - 1 Cr">50 Lacs to 1 Cr</option>
                <option value="1 Cr+">1 Cr and above</option>
              </Select>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="requirements" value="Requirements" />
            </div>
            <Textarea
              onChange={handleChange}
              id="requirements"
              name="Requirements"
              placeholder="Drop your requirements..."
              required
              rows={1}
            />
          </div>
          <Button
            type="submit"
            className="bg-black text-body-sm"
            onClick={() => {
              localStorage.setItem(
                "contactDetails",
                JSON.stringify(contactDetails)
              );
            }}
          >
            SUBMIT
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactUsModal;
