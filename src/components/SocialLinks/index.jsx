import React from 'react';

import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
import {
  Container,
  SocialLinksList,
  SocialLinkItem,
  SocialLink,
  IconContainer,
} from './styles';

const SocialLinks = () => {
  const links = [
    {
      Icon: FiGithub,
      label: 'Github',
      url: 'https://github.com/jvictorfarias',
    },
    {
      Icon: FiLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jvictorfarias/',
    },
    {
      Icon: FiInstagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/__jvictorfarias/',
    },
    {
      Icon: FiTwitter,
      label: 'Twitter',
      url: 'https://twitter.com/victorfarias__',
    },
  ];

  return (
    <Container>
      <SocialLinksList>
        {links.map(link => {
          const { Icon } = link;

          return (
            <SocialLinkItem key={link.label}>
              <SocialLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContainer>
                  <Icon size={24} />
                </IconContainer>
              </SocialLink>
            </SocialLinkItem>
          );
        })}
      </SocialLinksList>
    </Container>
  );
};

export default SocialLinks;
