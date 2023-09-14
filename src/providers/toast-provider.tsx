import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <>
      <Toaster
        position="bottom-center"
        containerStyle={{ left: 0, right: 0, bottom: 0 }}
        toastOptions={{
          icon: "",
          style: {
            padding: "16px 0",
            width: "100vw",
            maxWidth: "100vw",
            borderRadius: "0px",
            color: "white",
          },
          success: {
            style: {
              background: "rgb(34, 197, 94 )",
            },
          },
          error: {
            duration: 2000,
            style: {
              background: "red",
            },
          },
        }}
      />
    </>
  );
};

export default ToastProvider;
