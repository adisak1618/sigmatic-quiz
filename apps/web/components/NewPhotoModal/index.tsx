import React, { useState } from "react";
import { useInsertPhotoMutation } from "../../graphql/generated";
import { Modal, Formik, FormikInput, Form, Button, Yup } from "ui";

export const NewPhotoModal = () => {
  const [insertPhoto] = useInsertPhotoMutation();
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <p className="cursor-pointer" onClick={() => setIsActive(true)}>
        New Photo
      </p>
      <Modal
        isOpen={isActive}
        onClose={() => setIsActive(false)}
        title="Share Your Photo"
      >
        <div>
          <Formik
            initialValues={{
              author: "",
              description: "",
              url: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                await insertPhoto({
                  variables: {
                    input: values,
                  },
                  refetchQueries: ["Photos"],
                });
                resetForm();
                setIsActive(false);
              } catch (error) {
                console.log("something went wrong");
              }
            }}
            validationSchema={Yup.object().shape({
              author: Yup.string().required(),
              description: Yup.string().required(),
              url: Yup.string().required(),
            })}
          >
            <Form className="space-y-2">
              <div>
                <div className="mb-1.5 flex items-center gap-1 text-body5">
                  <p className="text-gray-8">author</p>
                  <p className="text-red-4">*</p>
                </div>
                <FormikInput name="author" />
              </div>
              <div>
                <div className="mb-1.5 flex items-center gap-1 text-body5">
                  <p className="text-gray-8">description</p>
                  <p className="text-red-4">*</p>
                </div>
                <FormikInput name="description" />
              </div>
              <div>
                <div className="mb-1.5 flex items-center gap-1 text-body5">
                  <p className="text-gray-8">url</p>
                  <p className="text-red-4">*</p>
                </div>
                <FormikInput name="url" />
              </div>
              <Button>Submit</Button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};
