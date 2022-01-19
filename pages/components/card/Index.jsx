import styles from "./Card.module.css";

export const Card = ({ children, className, ...props }) => {
  return (
    <article className={ styles.card } {...props}>
      {children}
    </article>
  );
};

//
// Card Header

const Header = ({ className, children, ...props}) => {
  return(
    <div className={className} {...props}>{children}</div>
  )
}
Card.Header = function CardHeader({ className, children, ...props }) {
  return (
    <Header className={styles.cardHeader } {...props}>
      {children}
    </Header>
  );
};

//
// Card Body

const Body = ({ className, children, ...props}) => {
  return(
    <div className={className} {...props}>{children}</div>
  )
}
Card.Body = function CardBody({ className, children, ...props }) {
  return (
    <Body className={styles.cardBody } {...props}>
      {children}
    </Body>
  );
};

//
// Card Footer

const Footer = ({ className, children, ...props}) => {
  return(
    <div className={className} {...props}>{children}</div>
  )
}
Card.Footer = function CardFooter({ className, children, ...props }) {
  return (
    <Footer className={styles.cardFooter } {...props}>
      {children}
    </Footer>
  );
};