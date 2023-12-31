import { FC, PropsWithChildren } from "react";

interface AppIconProps {
  icon: JSX.Element;
  action?: () => void;
}

export const AppIcon: FC<PropsWithChildren<AppIconProps>> = ({
  icon,
  action,
  children,
}) => {
  return (
    <button
      onClick={action}
      className="w-9 h-9 flex justify-center items-center relative rounded-full
       bg-app-primary_action lg:hover:bg-app-primary_hover active:bg-app-primary_hover
       transition-all duration-300"
    >
      <div className="text-app-secondary_action text-xl">{icon}</div>
      {children}
    </button>
  );
};
