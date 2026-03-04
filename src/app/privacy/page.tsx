export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-32 text-slate-300 min-h-screen">
            <h1 className="text-4xl font-black text-white mb-8">Privacy Policy</h1>
            <div className="prose prose-invert prose-indigo max-w-none">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us when you fill out forms, including your name, email address, and the specific operational bottlenecks or problems your business faces.</p>
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to operate, evaluate, and improve our services, including the generation of AI architectures via our Blueprint tool. By providing your email address, you consent to us sending you marketing communications, newsletters, and promotional materials. You can opt-out of these marketing communications at any time.</p>
                <h2>3. POPIA & GDPR Compliance</h2>
                <p>We process your data in strict accordance with the General Data Protection Regulation (GDPR) and the Protection of Personal Information Act (POPIA). We act as the Data Controller. You have the right to:
                    <ul>
                        <li>Request access to your personal data.</li>
                        <li>Request correction or deletion of your personal data.</li>
                        <li>Object to our processing of your personal data for direct marketing purposes.</li>
                        <li>Withdraw your consent at any time.</li>
                    </ul>
                    To exercise any of these rights, please contact us directly.</p>
                <h2>4. Third-Party Sharing</h2>
                <p>Your business bottleneck descriptions may be sent to third-party language models (like Google) temporarily to generate responses. We do not sell your personal data to data brokers or advertising platforms. We use secure third-party platforms (like SendGrid or Mailchimp) solely to deliver our marketing communications.</p>
                <h2>5. Data Security</h2>
                <p>We use reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
            </div>
        </div>
    );
}
