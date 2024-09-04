### Overview

- Trigger callback when scroll reaches the bottom

### How to use?

```javascript
const removeEvent = isBottom({
  cb: () => console.log('reached Bottom'),
  threshold: 200,
})

// call removeEvent to stop
removeEvent()
```
