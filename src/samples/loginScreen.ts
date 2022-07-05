import { ContainerComponent } from "../componentTypes";

const loginScreen: ContainerComponent = {
  id: "aaa21e6e-4191-4b9b-b9e3-24fac3a5572c",
  type: "container",
  name: "Login Screen",
  frame: {
    x: 0,
    y: 0,
    width: 240,
    height: 357
  },
  backgroundColor: {
    r: 1,
    g: 1,
    b: 1,
    a: 1
  },
  border: {
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    width: 1
  },
  cornerRadius: 0,
  children: [
    {
      id: "5a730e2a-25e7-4cad-bb59-fc4cade082fc",
      type: "container",
      name: "Login Button",
      frame: {
        x: 16,
        y: 316,
        width: 208,
        height: 28
      },
      backgroundColor: {
        r: 0,
        g: 0.7833333611488342,
        b: 0.45550671219825745,
        a: 1
      },
      cornerRadius: 4,
      children: [
        {
          id: "198569e7-9715-449a-85ca-65bc8bc3697b",
          type: "text",
          name: "Login Text",
          content: "Login",
          fontSize: 12,
          fontWeight: 700,
          fontFamily: "Helvetica",
          textColor: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          },
          frame: {
            x: 104,
            y: 323,
            width: 33,
            height: 14
          }
        }
      ]
    },
    {
      id: "56eae035-e56f-4734-94c2-07ac8e4c227c",
      type: "container",
      name: "Username Field",
      frame: {
        x: 16,
        y: 218,
        width: 208,
        height: 28
      },
      backgroundColor: {
        r: 0.9490196108818054,
        g: 0.9490196108818054,
        b: 0.9490196108818054,
        a: 1
      },
      cornerRadius: 8,
      children: [
        {
          id: "8424ba6f-6119-4461-9671-d5398604c1fe",
          type: "text",
          name: "Username Text",
          content: "Username",
          fontSize: 12,
          fontWeight: 400,
          fontFamily: "Helvetica",
          textColor: {
            r: 0.5098039507865906,
            g: 0.5098039507865906,
            b: 0.5098039507865906,
            a: 1
          },
          frame: {
            x: 24,
            y: 225,
            width: 56,
            height: 14
          }
        }
      ]
    },
    {
      id: "fedcf3f1-f7a8-45a4-a1c2-ecc4b149aa42",
      type: "container",
      name: "Password Field",
      frame: {
        x: 16,
        y: 258,
        width: 208,
        height: 28
      },
      backgroundColor: {
        r: 0.9490196108818054,
        g: 0.9490196108818054,
        b: 0.9490196108818054,
        a: 1
      },
      cornerRadius: 8,
      children: [
        {
          id: "cce41d74-bada-4d27-9614-f6fccc76a1b5",
          type: "text",
          name: "Password Text",
          content: "Password",
          fontSize: 12,
          fontWeight: 400,
          fontFamily: "Helvetica",
          textColor: {
            r: 0.5098039507865906,
            g: 0.5098039507865906,
            b: 0.5098039507865906,
            a: 1
          },
          frame: {
            x: 24,
            y: 265,
            width: 53,
            height: 14
          }
        }
      ]
    },
    {
      id: "dbedeec6-c021-4ea8-8dad-53840268a62d",
      type: "text",
      name: "Piggybank",
      content: "Piggybank",
      fontSize: 28,
      fontWeight: 700,
      fontFamily: "Helvetica",
      textColor: {
        r: 0.13333334028720856,
        g: 0.13333334028720856,
        b: 0.13333334028720856,
        a: 1
      },
      frame: {
        x: 16,
        y: 153,
        width: 142,
        height: 32
      }
    },
    {
      id: "e14e4502-f4f8-4435-bb0f-d93b006cbe14",
      type: "text",
      name: "Welcome to",
      content: "Welcome to",
      fontSize: 28,
      fontWeight: 300,
      fontFamily: "Helvetica",
      textColor: {
        r: 0.13333334028720856,
        g: 0.13333334028720856,
        b: 0.13333334028720856,
        a: 1
      },
      frame: {
        x: 16,
        y: 115,
        width: 148,
        height: 32
      }
    },
    {
      id: "28cc9694-190c-47db-8249-c51f565abb5f",
      type: "rectangle",
      name: "Hero Shape",
      frame: {
        x: 16,
        y: 16,
        width: 208,
        height: 64
      },
      backgroundColor: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
        a: 1
      },
      border: {
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        },
        width: 1
      },
      cornerRadius: 8
    }
  ]
};

export default loginScreen;
