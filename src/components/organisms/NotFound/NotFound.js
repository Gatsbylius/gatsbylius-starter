import React from "react";
import Section from "components/molecules/Section";
import CardItem from "components/molecules/CardItem";
import ListItems from "components/atoms/ListItems";

const NotFound = ({ categories }) => (
  <>
    <Section raw>
      <Section title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Section>
    </Section>

    <Section title="Our categories">
      <ListItems>
        {categories
          .filter((category) => category.products.length > 0)
          .map((category) => {
            return (
              <CardItem
                key={category.code}
                to={`/${category.slug}`}
                name={category.name}
                imageFluid={
                  category.thumbnail && category.thumbnail.childImageSharp.fluid
                }
              />
            );
          })}
      </ListItems>
    </Section>
  </>
);

export default NotFound;
