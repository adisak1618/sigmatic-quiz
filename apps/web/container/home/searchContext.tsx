import { createCtx } from "@/components/ContextFactory";

interface AppProps {
  search: string;
}

const [ctx, Provider] = createCtx<AppProps>({
  search: "",
});

export const searchContext = ctx;

export const SearchProvider = Provider;
