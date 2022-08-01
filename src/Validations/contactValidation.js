import * as Yup from "yup";

const contactSchema = Yup.object().shape({
    fullname: Yup.string().required("First and last name is required"),
    photo: Yup.string().url("The address is not valid").required("The picture of the contact is required"),
    mobile: Yup.number().required("Mobile number is required"),
    email: Yup.string().email("Email address is invalid").required("Email address is required"),
    job: Yup.string().nullable(),
    group: Yup.string().required("Group selection is required"),
});

export { contactSchema }