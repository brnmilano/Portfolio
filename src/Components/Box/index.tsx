import clsx from 'clsx';
import { CSSProperties } from 'react';

import {
  AlignContent,
  AlignItems,
  AlignSelf,
  Color,
  Dimension,
  Direction,
  Display,
  JustifyContent,
  Opacity,
  Overflow,
  Position,
} from 'Components/Styles/models';

/**
 * Clears empty values from an object.
 * This is necessary to not have properties being passed down as undefined and breaking other rules.
 * Ex: If you pass paddingTop and padding, only paddingTop would work then.
 */
function clearObject(obj: any, filterProperties: string[] = []) {
  const copy = { ...obj };

  for (const propName in copy) {
    if (copy[propName] === null || copy[propName] === undefined || filterProperties.includes(propName)) {
      delete copy[propName];
    }
  }
  return copy;
}

const AlignContentObject: any = {
  around: 'space-around',
  baseline: 'baseline',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start',
  stretch: 'stretch',
};

const AlignItemsObject: any = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
};

const AlignSelfObject: any = {
  auto: 'auto',
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
};

const DisplayObject: any = {
  none: 'none',
  block: 'block',
  inline: 'inline',
  inlineBlock: 'inline-block',
  visuallyHidden: undefined,
  flex: 'flex',
  grid: 'grid',
};

const JustifyContentObject: any = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start',
};

const OverflowObject: any = {
  visible: 'visible',
  hidden: 'hidden',
  scroll: 'scroll',
  scrollX: undefined,
  scrollY: undefined,
  auto: 'auto',
};

interface Props {
  anchorId?: string;
  style?: CSSProperties;
  className?: string;
  id?: string;

  display?: Display;
  direction?: Direction;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  justifyContent?: JustifyContent;
  gap?: number;

  gridTemplateColumns?: string;

  backgroundColor?: string;
  borderColor?: Color;
  borderStyle?: 1 | 2 | 'shadow' | 'none';
  borderRadius?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;

  margin?: number | string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginStart?: number;
  marginEnd?: number;

  padding?: number | string;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;

  position?: Position;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  overflow?: Overflow;
  opacity?: Opacity;

  height?: Dimension;
  width?: Dimension;
  maxHeight?: Dimension;
  maxWidth?: Dimension;
  minHeight?: Dimension;
  minWidth?: Dimension;

  userSelect?: 'auto' | 'none';

  ariaLabel?: string;
  dataTestId?: string;
  role?: string;
  zIndex?: number;
}

export default function Box(props: React.PropsWithChildren<Props>) {
  const clearedPropsWithoutChildren = clearObject(props, ['ariaLabel', 'anchorId', 'children', 'className', 'dataTestId', 'id', 'role']);

  const {
    alignContent,
    alignItems,
    alignSelf,
    borderColor = 'darkGray',
    borderStyle,
    direction,
    display,
    justifyContent,
    marginEnd,
    marginStart,
    opacity,
    overflow,
    position,
    style,
  } = clearedPropsWithoutChildren;

  const classes = clsx(
    props.className,
    (borderStyle === 1 || borderStyle === 2) && 'border',
    borderStyle && borderColor === 'blue' && 'border-color-blue',
    borderStyle && borderColor === 'darkGray' && 'border-color-dark-gray',
    borderStyle && borderColor === 'gray' && 'border-color-gray',
    borderStyle && borderColor === 'green' && 'border-color-green',
    borderStyle && borderColor === 'lightGray' && 'border-color-light-gray',
    borderStyle && borderColor === 'red' && 'border-color-red',
  );

  return (
    <div
      aria-label={props.ariaLabel}
      className={classes}
      data-testid={props.dataTestId}
      id={props.id}
      role={props.role}
      style={{
        ...clearedPropsWithoutChildren,
        ...(display && { display: DisplayObject[display] }),
        ...(direction && { flexDirection: direction }),
        ...(alignContent && { alignContent: AlignContentObject[alignContent] }),
        ...(alignItems && { alignItems: AlignItemsObject[alignItems] }),
        ...(alignSelf && { alignSelf: AlignSelfObject[alignSelf] }),
        ...(justifyContent && { justifyContent: JustifyContentObject[justifyContent] }),
        ...(marginEnd && { marginInlineEnd: marginEnd }),
        ...(marginStart && { marginInlineStart: marginStart }),
        ...(borderStyle === 'shadow' && { boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)' }),
        ...(overflow && { overflow: OverflowObject[overflow] }),
        ...(overflow === 'scrollX' && { overflowX: 'scroll' }),
        ...(overflow === 'scrollY' && { overflowY: 'scroll' }),
        ...((opacity ?? display === 'visuallyHidden') && { opacity: 0 }),
        ...(style && style),
        position: props.anchorId ? 'relative' : position,
      }}
    >
      {props.anchorId && <div id={props.anchorId} style={{ position: 'absolute', top: -100 }} />}
      {props.children}
    </div>
  );
}
