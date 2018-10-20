# cccisd-tabs

cccisd-tabs provides you with a bootstrap tab interface. Tabs can be displayed horizontally (default) or vertically.

## Installation

Run this command:

    npm install cccisd-tabs

## Usage
        render() {
            let tabList = [
                { name: 'first', title: 'First', content: 'This is the content for the first tab' },
                { name: 'second', title: 'Second', content: 'This is the content for the second tab' },
                { name: 'third', title: 'Third', content: 'This is the content for the third tab' },
            ];

            return <Tabs tabList={tabList} />
        },
  


### Props
**tabList** - (type: array, default: [])<br>
An array of objects representing each tab

**saveInHash** - (type: boolean, default: false)<br>
Whether or not to save the tab handle in the url

**orientation** - (type: string, default: 'horizontal')<br>
The desired orientation of the tabs (horizontal or vertical) 

**onTabSelect** - (type: func, default: () => {})<br>
Callback for what to do when a tab is selected

