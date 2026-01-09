import React from 'react';
import { useCursor } from '@/context/CursorContext';

interface WithCursorInteractionProps {
  cursorType?: string;
  elementType?: string;
}

const withCursorInteraction = <P extends Record<string, any>>(
  WrappedComponent: React.ComponentType<P>,
  options: WithCursorInteractionProps = {}
) => {
  const { cursorType = 'hover', elementType = 'default' } = options;

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithCursorInteraction = (props: P) => {
    const { setCursorType } = useCursor();

    const handleMouseEnter = () => {
      setCursorType(cursorType);
    };

    const handleMouseLeave = () => {
      setCursorType('default');
    };

    return React.createElement(WrappedComponent, {
      ...props,
      onMouseEnter: (e: React.MouseEvent) => {
        handleMouseEnter();
        if (props.onMouseEnter) props.onMouseEnter(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        handleMouseLeave();
        if (props.onMouseLeave) props.onMouseLeave(e);
      },
      className: `${props.className || ''} cursor-none`,
    });
  };

  ComponentWithCursorInteraction.displayName = `withCursorInteraction(${displayName})`;

  return ComponentWithCursorInteraction;
};

export default withCursorInteraction;