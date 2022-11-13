import { themes } from "./themes";
import {
  addIconSrc,
  checkMarkSrc,
  darkModeIconSrc,
  lightModeIconSrc,
} from "./icons";
import {
  ActionButton,
  Button,
  CodeField,
  Divider,
  FormField,
  HTMLTagField,
  TableHeader,
} from "./components";
import type { FormData, Theme } from "./types";
import { emptyPropValues, initialValues, styles } from "./constants";

const { widget } = figma;
const { AutoLayout, Frame, Text, SVG, useSyncedState, usePropertyMenu } =
  widget;

function Widget() {
  const [theme, setTheme] = useSyncedState<Theme>("theme", "light");
  const [isEditingEnabled, setIsEditingEnabled] = useSyncedState<boolean>(
    "isEditingEnabled",
    true
  );
  const [formValues, setFormValues] = useSyncedState<FormData>(
    "formValues",
    initialValues
  );

  const updateFormField = (name: string, value: string) => {
    setFormValues({ ...formValues, [`${name}`]: value });
  };

  const updatePropsField = (
    propIndex: number,
    name: string,
    value: string | boolean
  ) => {
    const newFieldValue = {
      ...formValues.props[propIndex],
      [`${name}`]: value,
    };
    const formValuesWithUpdatedProps = formValues.props.map((item, index) =>
      index === propIndex ? newFieldValue : item
    );

    setFormValues({
      ...formValues,
      props: formValuesWithUpdatedProps,
    });
  };

  const addPropsField = () => {
    setFormValues({
      ...formValues,
      props: [...formValues.props, emptyPropValues],
    });
  };

  const movePropsField = (index: number, direction: "up" | "down") => {
    const indexOfElementToSwap = direction === "up" ? index - 1 : index + 1;
    const reorderedProps = [...formValues.props];

    [reorderedProps[index], reorderedProps[indexOfElementToSwap]] = [
      reorderedProps[indexOfElementToSwap],
      reorderedProps[index],
    ];

    setFormValues({
      ...formValues,
      props: reorderedProps,
    });
  };

  const deletePropsField = (index: number) => {
    const formValuesWithoutCurrentProp =
      formValues.props.length <= 1
        ? [emptyPropValues]
        : formValues.props.filter((field, fieldIndex) => fieldIndex !== index);

    setFormValues({
      ...formValues,
      props: formValuesWithoutCurrentProp,
    });
  };

  return (
    <AutoLayout
      width={800}
      fill={themes[theme].widgetBackground}
      stroke={themes[theme].widgetBorder}
      cornerRadius={12}
      strokeWidth={1}
      direction="vertical"
      name="Widget"
    >
      <AutoLayout
        width="fill-parent"
        direction="vertical"
        spacing={12}
        padding={{
          left: styles.paddingBlock,
          right: styles.paddingBlock,
          top: 24,
          bottom: 24,
        }}
        name="WidgetHeader"
      >
        <FormField
          isEditingEnabled={isEditingEnabled}
          fontSize={24}
          theme={theme}
          value={formValues.name}
          placeholder="Component name"
          setValue={(newValue) => updateFormField("name", newValue)}
        />
        <FormField
          isEditingEnabled={isEditingEnabled}
          theme={theme}
          value={formValues.description}
          placeholder={
            isEditingEnabled
              ? "Add a description..."
              : "Enable editing to add a description."
          }
          setValue={(newValue) => updateFormField("description", newValue)}
          inputBehavior="multiline"
        />
      </AutoLayout>
      <Divider theme={theme} />
      <AutoLayout
        width="fill-parent"
        direction="vertical"
        padding={{
          left: styles.paddingBlock,
          right: styles.paddingBlock,
          top: 16,
          bottom: 16,
        }}
        spacing={12}
        name="AdditionalFields"
      >
        <HTMLTagField
          isEditingEnabled={isEditingEnabled}
          theme={theme}
          value={formValues.htmlTag}
          setValue={(newValue) => updateFormField("htmlTag", newValue)}
        />
        <CodeField
          isEditingEnabled={isEditingEnabled}
          theme={theme}
          value={formValues.code}
          setValue={(newValue) => updateFormField("code", newValue)}
        />
      </AutoLayout>
      <Divider theme={theme} />
      <TableHeader theme={theme} />
      <Divider theme={theme} />
      <AutoLayout
        width="fill-parent"
        direction="vertical"
        padding={{
          left: styles.paddingBlock,
          right: styles.paddingBlock,
          top: 8,
          bottom: 8,
        }}
        spacing={0}
      >
        {formValues.props.map((prop, propIndex) => {
          return (
            <AutoLayout
              width="fill-parent"
              direction="horizontal"
              verticalAlignItems="center"
              padding={{
                top: 8,
                bottom: 8,
              }}
              spacing={styles.cellGap}
              key={`prop-${propIndex}`}
              name="TableRow"
            >
              <AutoLayout
                width={styles.cellWidth}
                name="TableCell"
                height="fill-parent"
              >
                <FormField
                  isEditingEnabled={isEditingEnabled}
                  theme={theme}
                  value={formValues.props[propIndex].name}
                  placeholder="Prop"
                  setValue={(newValue) =>
                    updatePropsField(propIndex, "name", newValue)
                  }
                  fontFamily={styles.codeFontFamily}
                />
              </AutoLayout>
              <AutoLayout
                width={styles.cellWidth}
                name="TableCell"
                height="fill-parent"
              >
                <FormField
                  isEditingEnabled={isEditingEnabled}
                  theme={theme}
                  value={formValues.props[propIndex].type}
                  placeholder="Type"
                  setValue={(newValue) =>
                    updatePropsField(propIndex, "type", newValue)
                  }
                  fontFamily={styles.codeFontFamily}
                  fill={themes[theme].codeInputText}
                />
              </AutoLayout>
              <AutoLayout
                width={styles.requiredCellWidth}
                name="TableCell"
                height="fill-parent"
                onClick={() =>
                  isEditingEnabled
                    ? updatePropsField(
                        propIndex,
                        "required",
                        !formValues.props[propIndex].required
                      )
                    : undefined
                }
              >
                <AutoLayout
                  width={20}
                  height={20}
                  verticalAlignItems="center"
                  horizontalAlignItems="center"
                  cornerRadius={4}
                  stroke={themes[theme].disabledActionButtonIconFill}
                  strokeWidth={1.5}
                  hoverStyle={{
                    fill:
                      formValues.props[propIndex].required || !isEditingEnabled
                        ? undefined
                        : themes[theme].requiredCheckboxBackground,
                  }}
                >
                  {formValues.props[propIndex].required && (
                    <SVG src={checkMarkSrc} width={16} height={16} />
                  )}
                </AutoLayout>
              </AutoLayout>
              <AutoLayout
                width="fill-parent"
                height="fill-parent"
                verticalAlignItems="center"
                spacing={12}
                name="TableCell"
              >
                <AutoLayout
                  width="fill-parent"
                  height="fill-parent"
                  name="DefaultField"
                >
                  <FormField
                    isEditingEnabled={isEditingEnabled}
                    theme={theme}
                    value={formValues.props[propIndex].default}
                    placeholder="Default value"
                    setValue={(newValue) =>
                      updatePropsField(propIndex, "default", newValue)
                    }
                    fontFamily={styles.codeFontFamily}
                  />
                </AutoLayout>
                <ActionButton
                  disabled={propIndex === 0 || !isEditingEnabled}
                  theme={theme}
                  type="moveUp"
                  onClick={() => movePropsField(propIndex, "up")}
                />
                <ActionButton
                  disabled={
                    propIndex === formValues.props.length - 1 ||
                    !isEditingEnabled
                  }
                  theme={theme}
                  type="moveDown"
                  onClick={() => movePropsField(propIndex, "down")}
                />
                <ActionButton
                  disabled={
                    (propIndex === formValues.props.length - 1 &&
                      propIndex === 0 &&
                      formValues.props[propIndex].name === "" &&
                      formValues.props[propIndex].type === "" &&
                      formValues.props[propIndex].default === "") ||
                    !isEditingEnabled
                  }
                  theme={theme}
                  type="delete"
                  onClick={() => deletePropsField(propIndex)}
                />
              </AutoLayout>
            </AutoLayout>
          );
        })}
      </AutoLayout>
      <Divider theme={theme} />
      <AutoLayout
        width="fill-parent"
        direction="horizontal"
        padding={styles.paddingBlock}
        spacing={12}
        name="WidgetFooter"
      >
        <AutoLayout
          width="fill-parent"
          direction="horizontal"
          spacing={12}
          name="WidgetFooterActions"
        >
          <Button
            theme={theme}
            variant="primary"
            title="New prop"
            icon={addIconSrc(themes[theme].primaryButtonText)}
            onClick={() => addPropsField()}
          />
          <Button
            theme={theme}
            title={`${isEditingEnabled ? "Disable" : "Enable"} editing`}
            onClick={() => setIsEditingEnabled(!isEditingEnabled)}
          />
        </AutoLayout>
        <Button
          theme={theme}
          title={`${theme === "light" ? "Dark" : "Light"} mode`}
          icon={theme === "light" ? darkModeIconSrc : lightModeIconSrc}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(Widget);
