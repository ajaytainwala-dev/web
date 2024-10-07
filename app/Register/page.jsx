"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import AxiosInstance from "../../utils/AxiosInstance";

const PersonalSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required!"),
  lastName: yup.string().required("Last Name is required!"),
  dateOfBirth: yup.date().required("Date of Birth is required!"),
  gender: yup.string().required("Gender is required!"),
  motherTongue: yup.string().required("Mother Tongue is required!"),
  fatherName: yup.string().required("Father Name is required!"),
  fatherOccupation: yup.string().required("Father's Occupation is required!"),
  motherName: yup.string().required("Mother's Name is required!"),
  motherOccupation: yup.string().required("Mother's Occupation is required!"),
});
const EducationalSchema = yup.object().shape({
  currentClass: yup
    .string()
    .required("Current Class is required!")
    .oneOf(
      [
        "8th",
        "9th",
        "10th",
        "1st PUC / 11th",
        "2nd PUC / 12th",
        "B.Com",
        "BBA",
        "BCA",
        "B.Sc",
        "Charted Accountant (CA)",
        "Cost Management Accountant (CMA)",
        "Company Secretary (CS)",
        "NEET",
        "KCET",
      ],
      "Invalid class selected!"
    ),
  school: yup.string().required("School/College is required!"),
  previousMarks: yup.string().required("Previous Class Marks is required!"),
  board: yup
    .string()
    .required("Education Board is required!")
    .oneOf(
      [
        "States Board",
        "CBSE Board",
        "ICSE Board",
        "NIOS",
        "Bangalore University",
        "Bangalore City University",
        "Bangalore North University",
        "Autonomus",
        "Private University",
      ],
      "Invalid board selected!"
    ),
  stream: yup
    .string()
    .required("Stream is required!")
    .oneOf(["Science", "Commerce", "Arts"], "Invalid stream selected!"),
});

const CourseSchema = yup.object().shape({
  otherSubjects: yup.string(),
  mode: yup.string().required("Mode of teaching is required!"),
  subjects: yup
    .array()
    .of(yup.string())
    .required("Choose subjects else choose other"),
});

const contactInfoSchema = yup.object().shape({
  studentNumber: yup
    .number()
    .required("10 Digits Number is required")
    .test(
      "len",
      "Must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    ),
  parentNumber: yup
    .number()
    .required("10 Digits Number is required")
    .test(
      "len",
      "Must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    ),
  email: yup.string().email("Invalid email").required("Email is required!"),
  address: yup.string().required("Address is required!"),
});

const combinedSchema = yup.object().shape({
  ...PersonalSchema.fields,
  ...EducationalSchema.fields,
  ...contactInfoSchema.fields,
  referrence: yup.string().required("This field is required!"),
  confirmation: yup.boolean().oneOf([true], "You must confirm the details"),
});

export default function StudentRegistrationForm() {
  const [step, setStep] = useState(1);
  const getSchema = () => {
    switch (step) {
      case 1:
        return PersonalSchema;
      case 2:
        return EducationalSchema;
      case 3:
        return CourseSchema;
      case 4:
        return contactInfoSchema;
      default:
        return combinedSchema;
    }
  };
  const methods = useForm({
    resolver: yupResolver(getSchema()),
    mode: "onChange", // Validate on change
    reValidateMode: "onChange", // Re-validate on change
  });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = methods;

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) setStep((prev) => Math.min(prev + 1, 5));
  };
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // const onSubmit: SubmitHandler<FormData> = (data) => {
  const onSubmit = async(data) => {
    const reversedData = Object.keys(data)
      .reverse()
      .reduce((acc, key) => {
        acc[key] = data[key];
        return acc;
      }, {});

    const finalData = JSON.stringify(data);
    const result = await AxiosInstance.post("api/Register",finalData);
    reset();
    if (result.status === 200) {
      // Navigate to a success page or render a success component
      window.location.href = "/Success"; // Example of navigation
      // Alternatively, you can set a state to render a success component
      // setRegistrationSuccess(true);
    }
  };

  // const handleDownload = (data: FormData) => {
  const handleDownload = (data) => {
    const formDataString = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    const blob = new Blob([formDataString], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "student_registration.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <EducationInfo />;
      case 3:
        return <StudentPreference />;
      case 4:
        return <ContactInfo />;
      case 5:
        return <ReviewInfo />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 m-auto"
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Student Registration Form
          </h2>
          <div className="mb-6">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
            <div className="mt-2 flex justify-between">
              {[
                { key: 1, text: "Personal Info" },
                { key: 2, text: "Education Info" },
                { key: 3, text: "Course Preference" },
                { key: 4, text: "Contact Info" },
                { key: 5, text: "Review" },
              ].map((s) => (
                <span
                  key={s.key}
                  className={`text-[0.75rem] ${
                    s.key <= step ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  {s.text}
                </span>
              ))}
            </div>
          </div>
          {renderStep()}
          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Previous
              </button>
            )}
            {step <= 4 ? (
              <Button
                variant="contained"
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-auto"
                disabled={!methods.formState.isValid}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                disabled={!methods.formState.isValid || methods.formState.isSubmitting}
                color="success"
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

const FloatingLabelInput = ({
  label,
  register,
  required,
  id,
  type,
  pattern = {},
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
  };

  return (
    <div className="relative">
      <TextField
        required
        id="outlined-required"
        label={label}
        type={type}
        // id={id}
        {...register(id)}
        pattern={pattern}
        sx={{ width: "100%" }}
        // className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 `}
        // defaultValue="Hello World"
      />
      {/* <input
        {...register(id)}
        type={type}
        id={id}
        className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 `}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        pattern={pattern}
      />
      <label
        htmlFor={id}
        className={`absolute left-2 transition-all duration-200 ${
          isFocused || hasValue
            ? "-top-5 text-xs text-blue-600 font-bold"
            : "font-bold top-2 text-sm text-gray-400"
        }`}
      >
        {label}
      </label> */}
    </div>
  );
};

function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-5">
      {/* First Name */}
      <div>
        <FloatingLabelInput
          label="First Name"
          register={register}
          required="First name is required"
          id="firstName"
          type="text"
        />
        {errors.firstName && (
          <p className="mt-2 text-sm text-red-600">
            {errors.firstName?.message}
          </p>
        )}
      </div>
      {/* Last Name */}
      <div>
        <FloatingLabelInput
          label="Last Name"
          register={register}
          required="Last name is required"
          id="lastName"
          type="text"
        />
        {errors.lastName && (
          <p className="mt-2 text-sm text-red-600">
            {errors.lastName?.message}
          </p>
        )}
      </div>
      {/* Date of Birth */}
      <div>
        <label
          htmlFor="dateOfBirth"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth
        </label>
        <input
          {...register("dateOfBirth", {
            required: "Date of birth is required",
          })}
          type="date"
          id="dateOfBirth"
          className="mt-1 p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors.dateOfBirth && (
          <p className="mt-2 text-sm text-red-600">
            {errors.dateOfBirth?.message}
          </p>
        )}
      </div>
      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <div className="mt-2 space-y-2">
          {["Male", "Female", "Other"].map((gender) => (
            <div key={gender} className="flex items-center">
              <input
                {...register("gender", { required: "Gender is required" })}
                id={gender}
                type="radio"
                value={gender}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              />
              <label
                htmlFor={gender}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {gender}
              </label>
            </div>
          ))}
        </div>
        {errors.gender && (
          <p className="mt-2 text-sm text-red-600">{errors.gender?.message}</p>
        )}
      </div>
      {/* Mother tongue*/}
      <div>
        <FloatingLabelInput
          label="Mother Tongue"
          register={register}
          required="Mother Tongue is required"
          id="motherTongue"
          type="text"
        />
        {errors.motherTongue && (
          <p className="mt-2 text-sm text-red-600">
            {errors.motherTongue?.message}
          </p>
        )}
      </div>
      {/* Father Name*/}
      <div>
        <FloatingLabelInput
          label="Father Name"
          register={register}
          required="Father Name is required"
          id="fatherName"
          type="text"
        />
        {errors.fatherName && (
          <p className="mt-2 text-sm text-red-600">
            {errors.fatherName?.message}
          </p>
        )}
      </div>
      {/*Father's Occupation*/}
      <div>
        <FloatingLabelInput
          label="Father's Occupation"
          register={register}
          required="Father's Occupation is required"
          id="fatherOccupation"
          type="text"
        />
        {errors.fatherOccupation && (
          <p className="mt-2 text-sm text-red-600">
            {errors.fatherOccupation?.message}
          </p>
        )}
      </div>
      {/*Mother Name*/}
      <div>
        <FloatingLabelInput
          label="Mother's Name"
          register={register}
          required="Mother's Name is required"
          id="motherName"
          type="text"
        />
        {errors.motherName && (
          <p className="mt-2 text-sm text-red-600">
            {errors.motherName?.message}
          </p>
        )}
      </div>
      {/** Mother's Occupation*/}
      <div>
        <FloatingLabelInput
          label="Mother's Occupation"
          register={register}
          required="Mother's Occupation is required"
          id="motherOccupation"
          type="text"
        />
        {errors.motherOccupation && (
          <p className="mt-2 text-sm text-red-600">
            {errors.motherOccupation?.message}
          </p>
        )}
      </div>
    </div>
  );
}

function EducationInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      {/* Class Studying */}
      <div>
        <label
          htmlFor="currentClass"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Your Class Studying
        </label>{" "}
        <select
          id="currentClass"
          required
          name="class-Studying"
          className={`mt-[5px] p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 `}
          {...register("currentClass")}
          placeholder=" --Please choose an option--"
        >
          <option defaultValue="" selected disabled>
            --Please choose an option--
          </option>
          <option defaultValue="8th">8th</option>
          <option defaultValue="9th">9th</option>
          <option defaultValue="10th">10th</option>
          <option defaultValue="1st PUC/11th">1st PUC / 11th</option>
          <option defaultValue="2nd PUC/12th">2nd PUC / 12th</option>
          <optgroup label="Degree">
            <option defaultValue="B.Com">B.Com</option>
            <option defaultValue="BBA">BBA</option>
            <option defaultValue="BCA">BCA</option>
            <option defaultValue="B.Sc">B.Sc</option>
          </optgroup>

          <option defaultValue="Charted Accountant( CA )">
            Charted Accountant (CA)
          </option>
          <option defaultValue="Cost Management Accountant( CMA )">
            Cost Management Accountant (CMA)
          </option>
          <option defaultValue="Company Secretary (CS)">
            Company Secretary (CS)
          </option>
          <option defaultValue="NEET">NEET</option>
          <option defaultValue="KCET">KCET</option>
        </select>
        {/* <FloatingLabelInput
          label="Current Class"
          register={register}
          required="Current Class is required"
          id="currentClass"
          type="text"
        /> */}
        {errors.currentClass && (
          <p className="mt-2 text-sm text-red-600">
            {errors.currentClass.message}
          </p>
        )}
      </div>
      {/* Previous Class Marks */}
      <div>
        <FloatingLabelInput
          label="Previous class Marks / Grade"
          register={register}
          required="Previous Class marks"
          id="previousMarks"
          type="text"
        />
      </div>
      {/* Board */}
      <div className="my-2">
        <label
          htmlFor="board"
          className="block text-sm font-medium text-gray-700"
        >
          Board/University
        </label>
        <select
          id="board"
          className={`mt-1 p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 `}
          {...register("board")}
        >
          <option defaultValue="" selected disabled>
            --Select Board--
          </option>
          <option defaultValue="States Board">States Board</option>
          <option defaultValue="CBSE Board">CBSE Board</option>
          <option defaultValue="ICSE Board">ICSE Board</option>
          <option defaultValue="NIOS">NIOS</option>
          <optgroup label="Select University (Degree Students )">
            <option defaultValue="Bangalore University">
              Bangalore University
            </option>
            <option defaultValue="Bangalore City University">
              Bangalore City University
            </option>
            <option defaultValue="Bangalore North University">
              Bangalore North University
            </option>
            <option defaultValue="11">Autonomus</option>
            <option defaultValue="12">Private University</option>
          </optgroup>
        </select>
        {errors.currentClass && (
          <p className="mt-2 text-sm text-red-600">
            {errors.currentClass.message}
          </p>
        )}
      </div>
      {/* School */}
      <div>
        <FloatingLabelInput
          label="School / College Name"
          register={register}
          required="School/College is required"
          id="school"
          type="text"
        />
        {errors.school && (
          <p className="mt-2 text-sm text-red-600">{errors.school.message}</p>
        )}
      </div>
      {/* Stream */}
      <div>
        <label
          htmlFor="stream"
          className="block text-sm font-medium text-gray-700"
        >
          Study Stream
        </label>
        <select
          id="stream"
          className={`mt-1 p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 `}
          {...register("stream")}
        >
          <option defaultValue="" selected disabled>
            --Select Stream--
          </option>
          <option defaultValue="Science">Science</option>
          <option defaultValue="Commerce">Commerce</option>
          <option defaultValue="Arts">Arts</option>
        </select>

        {errors.stream && (
          <p className="mt-2 text-sm text-red-600">{errors.stream.message}</p>
        )}
      </div>
    </div>
  );
}

function StudentPreference() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Mathematics",
    "Science",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Accountancy",
    "Business Studies",
    "Economics",
    "Commercial Studies",
    "Commercial Application",
    "Kannada",
    "Hindi",
    "Others",
  ];

  const {
    watch,
    register,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  function getStyles(name, subjectName, theme) {
    return {
      fontWeight: subjectName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  const theme = useTheme();
  const [subjectName, setSubjectName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSubjectName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    setValue(
      "subjects",
      subjectName === "string" ? subjectName.split(",") : subjectName
    );
  }, [subjectName, setValue]);

  const formData = watch();

  return (
    <>
      <div className="space-y-4">
        <div>
          <p>Mention subjects need for {formData.currentClass}.</p>
        </div>
        <div>
          <div style={{ borderRadius: "8px" }}>
            <FormControl sx={{ width: "100%", marginBottom: "10px" }}>
              <InputLabel id="demo-multiple-chip-label">
                Select Subjects
              </InputLabel>
              <Controller
                name="subjects"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={subjectName}
                    // {...register("subjects")}
                    onChange={handleChange}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            sx={{ backgroundColor: "#1976d2", color: "#fff" }}
                          />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, subjectName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
            {subjectName.length > 0 && (
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#333", fontWeight: "bold" }}
                  className="text-center"
                >
                  Selected Subjects
                </Typography>
                {subjectName.map((name) => (
                  <p
                    key={name}
                    style={{
                      margin: "6px 0",
                      fontWeight: "bold",
                      color: "#1976d2",
                    }}
                  >
                    {name}
                  </p>
                ))}
              </Box>
            )}
            <input
              type="hidden"
              {...register("subjects")}
              value={subjectName}
            />
          </div>
          {errors.subjects && (
            <p className="mt-2 text-sm text-red-600">
              {errors.subjects.message}
            </p>
          )}
        </div>
        <div>
          <p>Mention subjects if not there above.</p>
          <TextField
            id="standard-basic"
            variant="standard"
            label="Other Subjects"
            type="text"
            {...register("otherSubjects")}
            sx={{ width: "100%" }}
          />
          {errors.otherSubjects && (
            <p className="mt-2 text-sm text-red-600">
              {errors.otherSubjects.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="mode">Select Mode of Teaching *</label>
          <select
            name="Mode-of-Teaching"
            id="mode"
            required
            {...register("mode")}
            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 `}
          >
            <option defaultValue="" selected disabled>
              Select Mode of Teaching
            </option>
            <option defaultValue="Online">Online</option>
            <option defaultValue="Offline">Offline</option>
          </select>
          {errors.mode && (
            <p className="mt-2 text-sm text-red-600">{errors.mode.message}</p>
          )}
        </div>
      </div>
    </>
  );
}

function ContactInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      {/* Students Contact Number */}
      <div>
        <FloatingLabelInput
          label="Student's Contact Number"
          register={register}
          required="Student Number is required"
          id="studentNumber"
          type="number"
          pattern={{
            value: /^\d{10}$/,
            message: "Phone number must be 10 digits",
          }}
        />
        {errors.studentNumber && (
          <p className="mt-2 text-sm text-red-600">
            {errors.studentNumber.message}
          </p>
        )}
      </div>
      {/* Parent Contact Number */}
      <div>
        <FloatingLabelInput
          label="Parent's Contact Number"
          register={register}
          required="Parent's Number is required"
          id="parentNumber"
          type="number"
        />
        {errors.parentNumber && (
          <p className="mt-2 text-sm text-red-600">
            {errors.parentNumber.message}
          </p>
        )}
      </div>
      {/* Email */}
      <div>
        <FloatingLabelInput
          label="Email I'D"
          register={register}
          required="Email I'D is required"
          id="email"
          type="email"
          pattern={{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          }}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      {/* Address */}
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <textarea
          {...register("address", { required: "Address is required" })}
          id="address"
          rows={3}
          className="mt-1 p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        ></textarea>
        {errors.address && (
          <p className="mt-2 text-sm text-red-600">{errors.address.message}</p>
        )}
      </div>
    </div>
  );
}

function ReviewInfo() {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();
  const formData = watch();

  return (
    <div className="space-y-4">
      <h3 className="text-xl text-center font-bold">Review Your Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-bold text-lg text-blue-500">
            Personal Information
          </h4>
          <p>
            <strong> Name:</strong> {formData.firstName} {formData.lastName}
          </p>
          <p>
            {" "}
            <strong>Date of Birth:</strong> {formData.dateOfBirth}
          </p>
          <p>
            {" "}
            <strong>Gender:</strong> {formData.gender}
          </p>
          <p>
            {" "}
            <strong>Mother Tongue:</strong> {formData.motherTongue}
          </p>
          <p>
            {" "}
            <strong>Father Name:</strong> {formData.fatherName}
          </p>
          <p>
            {" "}
            <strong>Father&apos;s Occupation:</strong> {formData.fatherOccupation}
          </p>
          <p>
            {" "}
            <strong>Mother Name:</strong> {formData.motherName}
          </p>
          <p>
            {" "}
            <strong>Mother&apos;s Occupation:</strong> {formData.motherOccupation}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg text-blue-500">
            Education Information
          </h4>
          <p>
            <strong>Class Studying:</strong> {formData.currentClass}
          </p>
          <p>
            <strong>Previous Class Marks:</strong> {formData.previousMarks}
          </p>
          <p>
            <strong>School:</strong> {formData.school}
          </p>
          <p>
            <strong>Stream:</strong> {formData.stream}
          </p>
          <p>
            <strong>Board:</strong> {formData.board}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg text-blue-500">Course Preference</h4>
          <h6>
            <strong>Subject Needed : </strong>
            {(formData.subjects).map((sub) => (
              <p  key={sub} className="block">{sub}</p>
            ))}
          </h6>
          {formData.otherSubjects.length > 0 && (
            <p>
              <strong>Others:</strong> {formData.otherSubjects}
            </p>
          )}
          <p>
            <strong>Mode:</strong> {formData.mode}
          </p>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg text-blue-500">Contact Information</h4>
        <p>
          <strong>Student Number:</strong> {formData.studentNumber}
        </p>
        <p>
          <strong>Parent Number:</strong> {formData.parentNumber}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Address:</strong> {formData.address}
        </p>
      </div>
      <div className="mt-4">
        <FloatingLabelInput
          label="How did you come to know about us?"
          register={register}
          required="How did you come to know about us?"
          id="referrence"
          type="text"
        />
        <label className="flex items-center mt-2">
          <input
            type="checkbox"
            {...register("confirmation", {
              required: "You must confirm the details",
            })}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <span className="ml-2 text-sm text-gray-700">
            I confirm that all the details are reviewed and correct.
          </span>
        </label>
        {errors.confirmation && (
          <p className="mt-2 text-sm text-red-600">
            {errors.confirmation.message}
          </p>
        )}
      </div>
    </div>
  );
}
