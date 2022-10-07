import React from "react";

export const redirectTo = (func, path, delay) => {
   setTimeout(() => {
      func(path);
   }, delay);
};