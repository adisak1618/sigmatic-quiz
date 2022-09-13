import clsx from "clsx";
import styled, { css } from "styled-components";

interface BgBoxProps {
  src: string;
  mark?: boolean;
  className?: string;
}

const BgImgElm = styled.div<BgBoxProps>`
  ${(p) =>
    p.mark ? ` mask: url(${p.src});` : `background-image: url(${p.src});`}
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
`;

export const BgImg = ({ src, mark, className }: BgBoxProps) => (
  <BgImgElm
    src={src}
    mark={mark}
    className={clsx("bg-center bg-no-repeat", className)}
  />
);
