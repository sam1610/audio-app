/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createAudioRec } from "../graphql/mutations";
const client = generateClient();
export default function AudioRecCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    txt: "",
    imageUrl: "",
    audioUrl: "",
  };
  const [txt, setTxt] = React.useState(initialValues.txt);
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [audioUrl, setAudioUrl] = React.useState(initialValues.audioUrl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTxt(initialValues.txt);
    setImageUrl(initialValues.imageUrl);
    setAudioUrl(initialValues.audioUrl);
    setErrors({});
  };
  const validations = {
    txt: [],
    imageUrl: [],
    audioUrl: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          txt,
          imageUrl,
          audioUrl,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createAudioRec.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AudioRecCreateForm")}
      {...rest}
    >
      <TextField
        label="Txt"
        isRequired={false}
        isReadOnly={false}
        value={txt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              txt: value,
              imageUrl,
              audioUrl,
            };
            const result = onChange(modelFields);
            value = result?.txt ?? value;
          }
          if (errors.txt?.hasError) {
            runValidationTasks("txt", value);
          }
          setTxt(value);
        }}
        onBlur={() => runValidationTasks("txt", txt)}
        errorMessage={errors.txt?.errorMessage}
        hasError={errors.txt?.hasError}
        {...getOverrideProps(overrides, "txt")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              txt,
              imageUrl: value,
              audioUrl,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
      ></TextField>
      <TextField
        label="Audio url"
        isRequired={false}
        isReadOnly={false}
        value={audioUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              txt,
              imageUrl,
              audioUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.audioUrl ?? value;
          }
          if (errors.audioUrl?.hasError) {
            runValidationTasks("audioUrl", value);
          }
          setAudioUrl(value);
        }}
        onBlur={() => runValidationTasks("audioUrl", audioUrl)}
        errorMessage={errors.audioUrl?.errorMessage}
        hasError={errors.audioUrl?.hasError}
        {...getOverrideProps(overrides, "audioUrl")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
