const privacyPolicySections = [
  {
    title: "Information Collection",
    content:
      "BikeZone collects personal details such as your name, email address, contact number, and bike service preferences during registration, booking, or while using our services.",
  },
  {
    title: "Data Usage",
    content:
      "Your information is used to manage bookings, provide service updates, offer personalized bike maintenance reminders, and enhance your user experience. We do not sell or rent your data to third parties.",
  },
  {
    title: "Location Access",
    content:
      "We may access your location to help locate nearby bike service centers or to enable pickup & delivery features. You can disable location access anytime through your device settings.",
  },
  {
    title: "Cookies",
    content:
      "BikeZone uses cookies to remember login sessions, track user preferences, and analyze service usage trends. You may control cookie preferences in your browser settings.",
  },
  {
    title: "Security Measures",
    content:
      "We implement robust measures including SSL encryption, secure authentication, and regular security audits to protect your data. All payment transactions are handled by certified third-party processors.",
  },
  {
    title: "Data Sharing",
    content:
      "Your data may be shared with trusted service partners (e.g., garages, payment gateways) only for fulfilling your service requests. All partners adhere to strict confidentiality agreements.",
  },
  {
    title: "Policy Updates",
    content:
      "This privacy policy may change from time to time. All updates will be reflected here, and major changes will be communicated via in-app notifications or email.",
  },
];

const Privacy = () => {
  return (
    <div>
      {/* Privacy Policy */}
      <section
        className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
        id="privacy"
      >
        <h2 className="text-3xl font-semibold mb-6">Privacy Policy</h2>
        <div className=" p-6 rounded-lg shadow-sm border">
          {privacyPolicySections.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-medium mb-3">{section.title}</h3>
              <p className="text-gray-400">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Privacy;
