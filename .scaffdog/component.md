---
name: "component"
description: "component of description"
message: "Please enter component name."
root: "src"
output: "./components/*"
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```typescript
export { {{ input | pascal }} } from "./{{ input | pascal }}";
```

# `{{ input | pascal }}/{{ input | pascal }}.tsx`

```typescript
import * as React from "react";
import * as Styled from "./styled";

type Props = {
}

const {{ input | pascal }}: React.FunctionComponent<Props> = () => (
  <Styled.Container>

  </Styled.Container>
);

export { {{ input | pascal }} };
```

# `{{ input | pascal }}/styled.ts`

```typescript
import styled from "styled-components";

export const Container = styled.div``;
```

# `{{ input | pascal }}/__tests__/{{ input | pascal }}.test.tsx`

```typescript
import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { {{ input | pascal }} } from "../";

describe("{{ input | pascal }} component testing", () => {
  afterEach(cleanup);

  test("{{ input | pascal }}", () => {
    const { asFragment } = render(<{{ input | pascal }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
```