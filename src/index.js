import React, { useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';
import ScrollMagic from 'scrollmagic-with-ssr';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleContainer = styled.div`
  position: relative;
`;

const TitleRevealer = styled.span`
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #E7E7E7;
  transform-origin: left;
  transform: scaleX(0);
`;

const Title = styled.span`
  visibility: hidden;
`;

const RevealTitle = ({
  children,
  delay,
  className,
  ...props
}) => {
  const revealer = React.useRef(null);
  const title = React.useRef(null);

  if (typeof window !== 'undefined') {
    const revealTimeline = new TimelineMax({
      delay: 0.5,
      paused: true,
    });
  
    const controller = new ScrollMagic.Controller();
  
    const onEnter = () => {
      revealTimeline.play();
    };
  
    useEffect(() => {
      new ScrollMagic.Scene({
        triggerHook: 'onEnter',
        triggerElement: revealer.current,
        offset: 300,
        duration: '100%',
      })
        .on('enter', onEnter)
        .addTo(controller);
  
      revealTimeline
        .to(revealer.current, 0.25, {
          delay,
          scaleX: 1,
          ease: Expo.easeOut,
        })
        .to(revealer.current, 0.45, {
          scaleX: 0,
          transformOrigin: 'right',
          ease: Expo.easeOut,
        })
        .to(title.current, 0, {
          visibility: 'visible',
          ease: Expo.easeOut,
        }, '=-.45');
    }, []);
  }

  return (
    <TitleContainer className={`reveal-title ${className}`} {...props}>
      <TitleRevealer className="reveal-title__revealer" ref={revealer} />
      <Title ref={title}>{children}</Title>
    </TitleContainer>
  );
};

RevealTitle.defaultProps = {
  className: '',
  delay: 0,
};

RevealTitle.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default RevealTitle;
