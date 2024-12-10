import { Helmet } from "react-helmet-async";
import Banner from "./sections/Banner";
import CustomerTable from "./sections/TableData";
import ActionHeader from "./sections/Action";

const CustomerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title> Customer </title>
      </Helmet>
      <section className="px-10">
        <Banner />
        <ActionHeader />
        <CustomerTable />
      </section>
    </>
  );
};

export default CustomerPage;
