import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from ".";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const setup = () => {
  const BreadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "Home Details", pageHref: "" },
  ];

  const { container } = render(
    <Router>
      <Breadcrumb data={BreadcrumbList} />
    </Router>
  );

  const breadcrumb = container.querySelector(`.breadcrumb`);

  return { breadcrumb };
};

test("Should have <ol> with className .bradbrumb and have text Home & Home Details", ()=>{
    const {breadcrumb} = setup();
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home");
    expect(breadcrumb).toHaveTextContent("Home Details");
});