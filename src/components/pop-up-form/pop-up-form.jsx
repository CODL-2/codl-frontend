import { BusinessCenter, Send } from "@mui/icons-material";
import React from "react";
import SlimLoader from "./../slim-loader/SlimLoader";
import CloseButton from "./../close-button/CloseButton";
import TFormValidator from "./../form-validator/FormValidator";
import TAuthInput from "./../auth-input/AuthInput";
import TButton from "../button/Button";

export default function CreatePortfolio({ message }) {
  const closePopUpForm = () => {};
  const handleSubmit = (data) => {};

  const validationSchema = {
    portfolio: {
      required: true,
      maxCharLength: 30,
    },
  };
  const initialValues = {};

  return (
    <div className="w-full h-full pointer-events-non fixed top-0 right-0">
      <div
        className={`w-full  h-full flex justify-center animate-fadeIn items-center bg-[rgb(0,0,0,0.5)] pointer-events-auto`}
      >
        <div
          className={`w-[480px]  h-[300px] animate-rise   bg-white shadow-md rounded-md relative  flex justify-start flex-col  pointer-events-none  overflow-hidden`}
        >
          <span className="w-full h-[5px] flex items-start">
            {true && <SlimLoader />}
          </span>
          <div className="w-full h-full  flex justify-start flex-col p-[20px]">
            <div className="w-full h-full flex justify-center items-center text-xl pointer-events-none relative">
              <div className="absolute  top-0 right-0  ">
                <CloseButton size={40} onClick={() => closePopUpForm()} />
              </div>
              <TFormValidator
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                isSubmitting={true}
                className="mt-[20px] flex justify-center flex-col w-full px-[10px]"
              >
                {({ errors, values }) => {
                  return (
                    <div className="w-full h-full flex items-center">
                      <TAuthInput
                        leftIcon={<BusinessCenter />}
                        label="Portfolio Name*"
                        required={true}
                        type="text"
                        name="portfolio"
                        className="shadow-neuroInsert border-0  pointer-events-auto"
                      />
                      <div className="w-full flex justify-end right-[15px] ">
                        <TButton
                          styles={{
                            backgroundColor: `${
                              true ? "#38506494" : "#385064"
                            }`,
                          }}
                          icon={<Send />}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="w-[150px] border-0 mt-[15px] pointer-events-auto animate-rise"
                        >
                          Create
                        </TButton>
                      </div>
                    </div>
                  );
                }}
              </TFormValidator>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
