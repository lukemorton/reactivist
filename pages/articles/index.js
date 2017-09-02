import React from 'react'
import app from '../../src/app'
import { Content, Page } from '../../components/Common'

export default app.page(() =>
  <Page title="Reactivist Articles">
    <Content>
      <Content.ReadingPage title={<h1>An approach to component directory structure</h1>}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ex neque, ut consequat lectus lobortis ornare. Curabitur finibus eget justo sit amet imperdiet. Curabitur malesuada nisl arcu, vel pellentesque tellus aliquam eu. Vestibulum id ex lacus. Vestibulum purus erat, dictum non risus vel, porta volutpat sapien. Integer diam tortor, rhoncus non hendrerit sit amet, dignissim in dui. Duis vitae imperdiet quam. Duis tempus, sem eu vulputate tincidunt, metus neque rutrum libero, quis volutpat risus lacus quis lectus. Aliquam ac ante pellentesque, malesuada ipsum vitae, tempor metus. Donec mollis justo ut mi laoreet, at laoreet dui pulvinar.</p>

        <p>Praesent sit amet posuere turpis. Ut mi urna, molestie vel risus commodo, luctus porttitor felis. Vivamus placerat non nulla non luctus. Maecenas tortor ex, aliquet sit amet sagittis scelerisque, cursus et magna. Vivamus convallis consectetur tincidunt. Sed sed aliquam turpis, id gravida ligula. Sed imperdiet ante pulvinar urna aliquam, et ornare mauris convallis. Nam sed pulvinar arcu.</p>

        <h2>Conclusion</h2>

        <p>Duis congue, sapien vehicula sagittis venenatis, odio magna vestibulum est, vel pharetra risus nulla a lacus. Quisque consequat cursus facilisis. Morbi imperdiet metus vel posuere luctus. Nulla iaculis vulputate mi, vitae ullamcorper leo viverra eget. Nunc ultrices egestas tempus. Phasellus lorem purus, pellentesque sed facilisis vitae, mattis id libero. Proin pharetra felis nec pharetra ullamcorper. Cras fringilla neque vitae nulla blandit ultrices. Suspendisse sed ullamcorper diam.</p>
      </Content.ReadingPage>
    </Content>
  </Page>
)
