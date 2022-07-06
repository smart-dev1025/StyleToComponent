import {
  Color,
  Rect,
  Stroke,
  ContainerComponent,
  TextComponent,
  RectangleComponent,
  EllipseComponent
} from "../componentTypes";

const getRect = (rect: Rect | undefined) => {
  return rect
    ? {
        position: `absolute`,
        left: `${rect.x}px`,
        top: `${rect.y}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`
      }
    : "";
};

const getStroke = (stroke: Stroke | undefined) => {
  return stroke
    ? {
        border: `${stroke.width}px solid rgb(${stroke.color.r}, ${stroke.color.g}, ${stroke.color.b}, ${stroke.color.a})`
      }
    : {};
};

const rgbaColor = (color: Color | undefined) => {
  return color
    ? `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${
        color.a * 255
      })`
    : "";
};

const Container = ({ component }: { component: ContainerComponent }) => {
  console.log("!", component.cornerRadius);
  let containerStyle = {
    ...getRect(component.frame),
    backgroundColor: rgbaColor(component.backgroundColor),
    ...getStroke(component.border),
    borderRadius: `${component.cornerRadius}px`
  };

  return (
    <>
      <div style={containerStyle} />
      {component.children.map((item) => {
        switch (item.type) {
          case "container":
            return <Container component={item} />;
          case "text":
            return <Text component={item} />;
          case "rectangle":
            return <Rectangle component={item} />;
          case "ellipse":
            return <Ellipse component={item} />;
        }
      })}
    </>
  );
};

const Text = ({ component }: { component: TextComponent }) => {
  return (
    <div
      style={{
        ...getRect(component.frame),
        fontSize: `${component.fontSize}px`,
        fontWeight: `${component.fontWeight}`,
        fontFamily: `${component.fontFamily}`,
        color: rgbaColor(component.textColor)
      }}
    >
      {component.content}
    </div>
  );
};

const Rectangle = ({ component }: { component: RectangleComponent }) => {
  return (
    <div
      style={{
        ...getRect(component.frame),
        ...getStroke(component.border),
        backgroundColor: rgbaColor(component.backgroundColor),
        borderRadius: `${component.cornerRadius}px`
      }}
    />
  );
};

const Ellipse = ({ component }: { component: EllipseComponent }) => {
  return (
    <div
      style={{
        ...getRect(component.frame),
        ...getStroke(component.border),
        backgroundColor: rgbaColor(component.backgroundColor),
        borderRadius: `50%`
      }}
    ></div>
  );
};

export const FunctionBody = ({
  component
}: {
  component: ContainerComponent;
}) => {
  return (
    <div style={{ position: "relative" }}>
      <Container component={component} />
    </div>
  );
};
