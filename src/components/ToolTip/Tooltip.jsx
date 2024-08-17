import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({
  children,
  content,
  position = 'top',
  trigger = 'hover',
  delay = 0,
  theme = 'dark',
  customStyles = {},
  customArrowStyles = {},
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  // Handlers for showing and hiding the tooltip
  const showTooltip = () => {
    if (delay) {
      setTimeout(() => setVisible(true), delay);
    } else {
      setVisible(true);
    }
  };

  const hideTooltip = () => setVisible(false);

  // Choose event handlers based on the trigger prop
  const eventHandlers = {
    hover: {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    },
    focus: {
      onFocus: showTooltip,
      onBlur: hideTooltip,
    },
    click: {
      onClick: () => setVisible(!visible),
    },
  };

  // Base styles for the tooltip
  const tooltipStyles = {
    position: 'absolute',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    fontWeight: 500, // Make the font bold
    whiteSpace: 'nowrap',
    opacity: visible ? 1 : 0,
    backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
    color: theme === 'dark' ? '#fff' : '#333',
    zIndex: 9999,
    transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)', // Smoother transition
    transform: visible ? 'translateY(0)' : 'translateY(-5px)', // Slight upward movement when hiding
    ...customStyles, // Apply custom styles from props
  };
  

  // Positioning logic for the tooltip
  const positionStyles = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -0.5rem)',
      marginBottom: '0.5rem',
    },
    right: {
      top: '50%',
      left: '100%',
      transform: 'translate(0.5rem, -50%)',
      marginLeft: '0.5rem',
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 0.5rem)',
      marginTop: '0.5rem',
    },
    left: {
      top: '50%',
      right: '100%',
      transform: 'translate(-0.5rem, -50%)',
      marginRight: '0.5rem',
    },
  };

  // Combine base styles with positioning styles
  const finalTooltipStyles = {
    ...tooltipStyles,
    ...positionStyles[position],
  };

  // Styles for the arrow
  const arrowStyles = {
    content: '""',
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    ...customArrowStyles, // Apply custom arrow styles from props
  };

  // Positioning logic for the arrow
  const arrowPositionStyles = {
    top: {
      top: '100%',
      left: '50%',
      borderWidth: '0.5rem 0.5rem 0 0.5rem',
      borderColor: `${theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)'} transparent transparent transparent`,
      transform: 'translateX(-50%)',
    },
    right: {
      top: '50%',
      left: 0,
      borderWidth: '0.5rem 0.5rem 0.5rem 0',
      borderColor: `transparent ${theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)'} transparent transparent`,
      transform: 'translateY(-50%)',
    },
    bottom: {
      bottom: '100%',
      left: '50%',
      borderWidth: '0 0.5rem 0.5rem 0.5rem',
      borderColor: `transparent transparent ${theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)'} transparent`,
      transform: 'translateX(-50%)',
    },
    left: {
      top: '50%',
      right: 0,
      borderWidth: '0.5rem 0 0.5rem 0.5rem',
      borderColor: `transparent transparent transparent ${theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)'}`,
      transform: 'translateY(-50%)',
    },
  };

  // Combine arrow styles with positioning styles
  const finalArrowStyles = {
    ...arrowStyles,
    ...arrowPositionStyles[position],
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} {...eventHandlers[trigger]} {...props}>
      {children}
      {visible && (
        <div style={finalTooltipStyles}>
          {content}
          <div style={finalArrowStyles}></div>
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  trigger: PropTypes.oneOf(['hover', 'focus', 'click']),
  delay: PropTypes.number,
  theme: PropTypes.oneOf(['light', 'dark']),
  customStyles: PropTypes.object,
  customArrowStyles: PropTypes.object,
};

export default Tooltip;
