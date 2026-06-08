import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Shahnewaj Islam",
    companyAddress: "Queens",
    companyCity: "Queens",
    companyState: "TUN",
    companyCountry: "Usa",
    companyLogo: "/android-chrome-192x192.png",
    companyTaxId: "",
    companyZip: "4000",
    email: "support@demiui.org",
  },
  yourDetails: {
    yourName: "Shahnewaj Islam",
    yourAddress: "Enfidha",
    yourCity: "Susah",
    yourState: "Susah",
    yourCountry: "Usa",
    yourLogo: "/pranav.png",
    yourEmail: "hello@demiui.com",
    yourTaxId: "",
    yourZip: "4030",
  },
  paymentDetails: {
    bankName: "Easy Bank",
    accountNumber: "1234567890",
    accountName: "Shahnewaj Islam",
    routingCode: "123456",
    swiftCode: "AXISINBB1234",
    ifscCode: "UTIB0000000",
    currency: "TND",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #001",
    issueDate: "Fri Apr 19 2025 00:00:00 GMT+1 (Paris Standard Time)",
    dueDate: "Mon Apr 22 2025 00:00:00 GMT+1 (Paris Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2025 to 20/04/2025",
    discount: "690",
    taxRate: "19",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 3000,
        qty: 2,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 3500,
        qty: 4,
      },
    ],
    currency: "TND",
  },
};
export default DemoPreview;
