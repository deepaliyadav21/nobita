import * as React from "react";
import useApi from "@/hooks/useApi";
import { GetAllUserData, GetProfileApi, UpdateProfileApi } from "@/apis";
import { ProfileDetailsType, UserProfile } from "@/types";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import BasicInfo from "./profile/BasicInfo";
import Experience from "./profile/Experience";
import Social from "./profile/Social";
import { Form, Formik } from "formik";
import Button from "../Button";
import Row from "../Row";
import * as Yup from "yup";
import { toast } from "react-toastify";

const emptyProfileDetails: ProfileDetailsType = {
  email: "",
  uuid: "",
  name: "",
  gender: "",
  country: "",
  bio: "",
  expertise: "",
  seniority: "",
  work_experience: [],
  education: [],
  current_organisation: "",
  tagline: "",
  skill: [],
  social_urls: [],
};

export default function UpdateProfilePage() {
  const { makeApiCall } = useApi();
  const [profileDetails, setProfileDetails] =
    React.useState<ProfileDetailsType>(emptyProfileDetails);
  const [selected, setSelected] = React.useState<React.Key>("basicinfo-tab");

  React.useEffect(() => {
    makeApiCall(GetProfileApi())
      // eslint-disable-next-line
      .then((response: any) => {
        console.log(response, "Response  of get profile");
        setProfileDetails(response?.data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        console.log("finally");
      });
  }, [makeApiCall]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    uuid: Yup.string().required("UUID is required"),
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
    bio: Yup.string().required("Bio is required"),
    expertise: Yup.string().required("Expertise is required"),
    seniority: Yup.string().required("Seniority is required"),
    current_organisation: Yup.string().required(
      "Current Organisation is required"
    ),
    tagline: Yup.string().required("Tagline is required"),
    skill: Yup.string().required("Skill is required"),

    // work_experience validation - array of objects
    work_experience: Yup.array().of(
      Yup.object().shape({
        role: Yup.string().required("Role is required"),
        company: Yup.string().required("Company is required"),
        employmentType: Yup.string().required("Employment type is required"),
        duration: Yup.object().shape({
          start: Yup.string().required("Start date is required"),
          end: Yup.string().required("End date is required"),
          years: Yup.number()
            .required("Years are required")
            .positive()
            .integer(),
        }),
        location: Yup.string().required("Location is required"),
        skills: Yup.array().of(Yup.string()).required("Skills are required"),
      })
    ),

    // Education validation - array of objects
    education: Yup.array().of(
      Yup.object().shape({
        universityName: Yup.string().required("University name is required"),
        degree: Yup.string().required("Degree is required"),
        duration: Yup.object().shape({
          start: Yup.string().required("Start date is required"),
          end: Yup.string().required("End date is required"),
          years: Yup.number()
            .required("Years are required")
            .positive()
            .integer(),
        }),
        skills: Yup.array().of(Yup.string()).required("Skills are required"),
      })
    ),

    // social_urls validation - array of objects
    social_urls: Yup.array().of(
      Yup.object().shape({
        platform: Yup.string().required("Platform is required"),
        url: Yup.string().url("Invalid URL format").required("URL is required"),
      })
    ),
  });

  const handleSubmit = React.useCallback(
    ({
      email,
      uuid,
      name,
      gender,
      country,
      bio,
      expertise,
      seniority,
      work_experience,
      education,
      current_organisation,
      tagline,
      skill,
      social_urls,
    }: ProfileDetailsType) => {
      // Example of how you can process the array of work experiences, education, and social URLs
      console.log(
        email,
        uuid,
        name,
        gender,
        country,
        bio,
        expertise,
        seniority,
        work_experience,
        education,
        current_organisation,
        tagline,
        skill,
        social_urls,
        "All data sending"
      );
      // const formattedwork_experience = work_experience.map((experience) => ({
      //   role: experience.role,
      //   company: experience.company,
      //   employmentType: experience.employmentType,
      //   duration: {
      //     start: experience.duration.start,
      //     end: experience.duration.end,
      //     years: experience.duration.years,
      //   },
      //   location: experience.location,
      //   skills: experience.skills.join(", "),
      // }));

      // const formattedEducation = education.map((edu) => ({
      //   universityName: edu.universityName,
      //   degree: edu.degree,
      //   duration: edu.duration,
      //   skills: edu.skills.join(", "),
      // }));

      // const formattedsocial_urls = social_urls.map((social) => ({
      //   platform: social.platform,
      //   url: social.url,
      // }));

      return makeApiCall(
        UpdateProfileApi(
          uuid,
          name,
          gender,
          country,
          bio,
          expertise,
          seniority,
          work_experience,
          education,
          current_organisation,
          tagline,
          skill,
          social_urls
        )
      )
        .then((response) => {
          toast.success("Profile updated succesfully");
          console.log(response, "Responseof upload products");
        })
        .catch((error) => {
          toast.error(
            error?.response?.data?.message || "Product addition failed"
          );
        });
    },
    []
  );

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-900">Profile Update</h2>
      <div>
        <Formik
          initialValues={profileDetails}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
          // validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <Tabs
              aria-label="Options"
              selectedKey={selected.toString()}
              onSelectionChange={setSelected}
            >
              <Tab key="basicinfo-tab" title="Basic Info">
                <BasicInfo profileData={profileDetails} />
              </Tab>
              <Tab key="experience-tab" title="Experience">
                <Experience profileData={profileDetails} />
              </Tab>
              <Tab key="social-tab" title="Social">
                <Social profileData={profileDetails} />
              </Tab>
            </Tabs>
          </Form>
        </Formik>
      </div>
    </>
  );
}
