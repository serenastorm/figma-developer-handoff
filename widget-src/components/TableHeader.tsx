import { themes } from "../themes";
import { FormField } from "./FormField";
import type { FormData, Theme } from "../types";
import { initialValues, styles } from "../constants";

const { widget } = figma;
const { AutoLayout, Text } = widget;

type TableHeaderCellProps = {
  label: string;
  theme: Theme;
  width?: WidgetJSX.AutolayoutSize;
};

const TableHeaderCell = ({
  label,
  theme,
  width = styles.cellWidth,
}: TableHeaderCellProps) => {
  return (
    <AutoLayout width={width} direction="horizontal" name="TableHeaderCell">
      <Text fontSize={16} fill={themes[theme].text}>
        {label}
      </Text>
    </AutoLayout>
  );
};

export const TableHeader = ({ theme }: { theme: Theme }) => {
  return (
    <AutoLayout
      width="fill-parent"
      direction="horizontal"
      padding={{
        left: styles.paddingBlock,
        right: styles.paddingBlock,
        top: 12,
        bottom: 12,
      }}
      spacing={styles.cellGap}
      name="TableHeader"
    >
      <TableHeaderCell label="Prop" theme={theme} />
      <TableHeaderCell label="Type" theme={theme} />
      <TableHeaderCell label="Required?" width={styles.requiredCellWidth} theme={theme} />
      <TableHeaderCell
        label="Default value"
        width="fill-parent"
        theme={theme}
      />
    </AutoLayout>
  );
};
