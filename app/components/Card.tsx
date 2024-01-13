import { useState, type ReactElement } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps): ReactElement {
  const [checked, setChecked] =
    useState<Checkbox.CheckedState>("indeterminate");

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg font-medium px-2 py-1">
      <form>
        <div>
          <label className="flex items-center hover:cursor-pointer">
            <Checkbox.Root
              className="w-5 mr-1"
              id="c1"
              checked={checked}
              onCheckedChange={setChecked}
            >
              <Checkbox.Indicator>
                <CheckCircleIcon
                  className={checked ? "text-indigo-500" : "text-gray-500"}
                />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <span className="select-none">{title}</span>
          </label>
        </div>
      </form>
    </div>
  );
}
