export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-32 text-slate-300 min-h-screen">
            <h1 className="text-4xl font-black text-white mb-8">Terms of Service</h1>
            <div className="prose prose-invert prose-indigo max-w-none">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <h2>2. Description of Service</h2>
                <p>The Social Collective AI provides generative AI blueprints, operational consulting, and custom software development services. We reserve the right to modify or discontinue the service at any time.</p>
                <h2>3. User Data and Marketing Communications</h2>
                <p>By submitting your information (such as your name and email address) via our forms, you explicitly consent to us contacting you for conversational follow-ups, service proposals, and ongoing marketing communications. When you submit operational bottlenecks, you grant us permission to process that text via third-party AI APIs (such as Google Gemini) to generate architectural responses.</p>
                <h2>4. POPIA and GDPR Compliance</h2>
                <p>We are committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA) of South Africa and the General Data Protection Regulation (GDPR) of the European Union. You have the right to request access to, correction of, or deletion of your personal data at any time. You may withdraw your consent for marketing communications by clicking the "unsubscribe" link in any of our emails or by contacting us directly.</p>
                <h2>5. Limitation of Liability</h2>
                <p>Generated blueprints are provided for informational purposes only. The Social Collective AI is not liable for any damages or losses related to your use of or reliance on our generated architectures.</p>
            </div>
        </div>
    );
}
