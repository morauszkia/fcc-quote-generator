const SocialLink = ({ children, href, id, ...rest }) => {
  return (
    <a href={href} id={id} {...rest}>
      {children}
    </a>
  );
};

export default SocialLink;
