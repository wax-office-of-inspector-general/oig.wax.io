<script setup>
import moment from 'moment';

const appName = '"WAX OIG website"';
const appMail = 'ig[at]wax.io';
const lastUpdated = moment('2023-11-15').format('MMM Do YYYY');
</script>
<template>
  <div class="prose">
    <h2>Privacy Policy</h2>

    <p class="text-xs underline">Last Updated: {{ lastUpdated }}</p>

    <p>
      Thank you for using the {{ appName }}. This Privacy Policy outlines our
      commitment to your privacy and details the information we collect, how it
      is used, and how it is protected.
    </p>

    <h3>No Tracking or Data Collection:</h3>
    <p>
      {{ appName }} does not employ any form of tracking, analytics, or data
      collection. We respect your privacy and do not gather information about
      your your usage patterns, preferences, or any personally identifiable
      information.
    </p>

    <h3>Decentralized Nature:</h3>
    <p>
      {{ appName }} operates on a decentralized architecture, meaning that user
      data is not stored on central servers. Instead, it remains within your
      control, enhancing your privacy and security.
    </p>

    <h3>Personal Information:</h3>
    <p>
      We do not collect, store, or process any personal information about our
      users. Your data, including but not limited to personal details, browsing
      history, or transaction information, is not accessed or stored by
      {{ appName }}
    </p>

    <h3>Communication:</h3>
    <p>
      {{ appName }} does not engage in any form of communication with external
      servers or third-party services. Your usage of the app is entirely
      isolated, ensuring a private and secure experience.
    </p>

    <h3>Blockchain Transactions:</h3>
    <p>
      If your app involves blockchain transactions, please note that transaction
      details may be visible on the public ledger. However, {{ appName }} itself
      does not store or transmit any personal information associated with these
      transactions.
    </p>

    <h3>Anonymous Usage:</h3>
    <p>
      Users of {{ appName }} can enjoy the benefits of the app without the need
      to create accounts or provide personal information. We encourage anonymous
      usage to protect your privacy.
    </p>

    <h3>Security Measures:</h3>
    <p>
      While using {{ appName }}, your data is protected through encryption and
      other security measures. We are committed to providing a secure
      environment for your decentralized experience.
    </p>

    <h3>Policy Changes:</h3>
    <p>
      We may update this Privacy Policy to reflect changes in our practices or
      for other operational, legal, or regulatory reasons. Any changes will be
      effective immediately upon posting the updated Privacy Policy.
    </p>

    <h3>Questions and Contact Information:</h3>
    <p>
      If you have any questions or concerns about this Privacy Policy or your
      privacy while using {{ appName }}, please contact us at
      {{ appMail }}
    </p>

    <hr />

    <p>
      By using {{ appName }}, you agree to the terms outlined in this Privacy
      Policy. Please review this policy regularly for any updates. Thank you for
      trusting {{ appName }} with your decentralized experience.
    </p>
  </div>
</template>
