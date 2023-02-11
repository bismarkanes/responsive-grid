import React from 'react'

import { ResponsiveGridContainer, ResponsiveGrid } from 'responsive-grid'

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

const App = () => {
  return (
    <Example/>
  )
}

export default App
