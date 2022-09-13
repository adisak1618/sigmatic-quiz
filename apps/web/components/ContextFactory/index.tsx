import React from "react";

export function createCtx<P>(defaultValue: P) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = React.createContext({
    data: defaultValue,
    update: defaultUpdate,
  });
  function Provider(props: React.PropsWithChildren<{}>) {
    const [data, update] = React.useState(defaultValue);
    const value = React.useMemo(
      () => ({
        data,
        update,
      }),
      [data]
    );
    return <ctx.Provider value={value} {...props} />;
  }
  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}
