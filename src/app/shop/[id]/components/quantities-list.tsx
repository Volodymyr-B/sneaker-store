import { FC } from "react";
import { cn } from "@/lib/utils/tw-merge";
import type { QuantityShort } from "@/types/dto-in";

interface QuantitiesListProps {
  quantities: QuantityShort[];
  pickedSize: string;
  onPick: (val: string) => void;
}

export const QuantitiesList: FC<QuantitiesListProps> = ({
  quantities,
  pickedSize,
  onPick,
}) => {
  if (!quantities.length)
    return (
      <div className="text-red-500">
        Unfortunately, this product out of stok
      </div>
    );

  return (
    <div>
      <h5>select size :</h5>
      <div className="grid grid-cols-2 gap-2">
        {quantities.map((prod) => (
          <button
            onClick={() => onPick(prod.size)}
            className={cn(
              `w-full h-12 border-solid border-2 uppercase
              border-app-secondary_hover hover:border-app-secondary rounded-md`,
              pickedSize === prod.size && "bg-app-secondary"
            )}
            key={prod.id}
          >
            {prod.size}
          </button>
        ))}
      </div>
    </div>
  );
};
