<script setup>
import moment from 'moment';

const appName = '"WAX OIG website"';
const appMail = 'ig[at]wax.io';
const lastUpdated = moment('2023-11-15').format('MMM Do YYYY');
</script>
<template>
  <div class="prose">
    <h2>Terms & Service</h2>

    <p class="text-xs underline">Last Updated: {{ lastUpdated }}</p>

    <p>
      Thank you for choosing {{ appName }}. This Privacy Policy outlines our
      commitment to your privacy and details the information we collect, how it
      is used, and how it is protected.
    </p>

    <h3>Use of the App:</h3>
    <p>
      You may use {{ appName }} for lawful purposes and in accordance with these
      Terms. The app is provided on an "as is" and "as available" basis.
    </p>

    <h3>No Account Creation:</h3>
    <p>
      {{ appName }} is designed to respect your privacy, and as such, it does
      not require the creation of user accounts. You can access and use the app
      anonymously.
    </p>

    <h3>Decentralized Nature:</h3>
    <p>
      {{ appName }} operates on a decentralized architecture. You have full
      control over your data, transactions, and activities within the app. We do
      not store your information on central servers.
    </p>

    <h3>Limitation of Liability:</h3>
    <p>
      {{ appName }} is not liable for any direct, indirect, incidental, special,
      or consequential damages arising out of or in any way connected with the
      use of our app.
    </p>

    <h3>No Tracking or Data Collection:</h3>
    <p>
      We do not track your usage or collect any personal information. Your
      privacy is a priority, and {{ appName }} does not engage in any form of
      data collection.
    </p>

    <h3>Security Measures:</h3>
    <p>
      While using {{ appName }}, your data is protected through encryption and
      other security measures. However, users are responsible for the security
      of their devices and connections.
    </p>

    <h3>Third-Party Links:</h3>
    <p>
      {{ appName }} may contain links to third-party websites or services. We
      are not responsible for the content or practices of these linked sites and
      encourage users to review the terms and privacy policies of such sites.
    </p>

    <h3>Intellectual Property:</h3>
    <p>
      All content, trademarks, and intellectual property within
      {{ appName }} are the property of their respective owners. You may not
      reproduce, distribute, or use any content from the app without permission.
    </p>

    <h3>Changes to Terms:</h3>
    <p>
      {{ appName }} reserves the right to update or modify these Terms at any
      time. Any changes will be effective immediately upon posting the updated
      Terms. It is your responsibility to review these Terms regularly.
    </p>

    <h3>Contact Information:</h3>
    <p>
      If you have any questions or concerns about these Terms, please contact us
      at {{ appMail }}
    </p>

    <hr />

    <p>
      By using {{ appName }}, you agree to abide by these Terms of Service.
      Thank you for choosing {{ appName }} for your decentralized experience.
    </p>
  </div>
</template>
