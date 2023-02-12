# Responsive Grid Container

> Small library responsive grid base container

This library is using:
  * [Styled Components](https://styled-components.com/)
  * [Container Base](https://github.com/bismarkanes/container-base)

[![NPM](https://img.shields.io/npm/v/responsive-grid-container.svg)](https://www.npmjs.com/package/@bismarkanes/responsive-grid-container) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install @bismarkanes/responsive-grid-container
```

## Note
* *This library is intended to be small.*

## Usage

```jsx
import React from 'react'

import { ResponsiveGridContainer, ResponsiveGrid } from '@bismarkanes/responsive-grid-container'

const ResponsiveListView = (props) => {
  return (
    <ResponsiveGrid mobileGrid={1} tabletGrid={2} laptopGrid={3} desktopGrid={4} {...props} />
  )
}

class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResponsiveGridContainer align="baseline" justify="flex-start" >
          <ResponsiveListView>
            <p>Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.</p>
          </ResponsiveListView>
          <ResponsiveListView>
            <p>Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.</p>
          </ResponsiveListView>
          <ResponsiveListView>
            <p>Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.</p>
          </ResponsiveListView>
          <ResponsiveListView>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Nam vestibulum accumsan nisl.</p>
          </ResponsiveListView>
          <ResponsiveListView>
            <p>Orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.</p>
          </ResponsiveListView>
          <ResponsiveListView>
            <p>Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus. Nam euismod tellus id erat.</p>
          </ResponsiveListView>
        </ResponsiveGridContainer>
      </React.Fragment >
    )
  }
}
```

## Reference
TODO

## License

Licensed under the MIT License, Copyright © 2023-present Bismark Johannes

See [LICENSE](./LICENSE) for more information.
