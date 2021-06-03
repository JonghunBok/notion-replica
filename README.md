# Notion-Replica

## Frontend
### 사용 기술
- Typescript
- React


### 사용 후보 기술
#### Webpack Module Federation
  
  만약 마이크로-프론트엔드 전략이 필요할 경우, Webpack5의 Module Federation의 적용을 검토해보고자 한다.

  참고: https://micro-frontends.org/

#### Docker-Compose

  후에 개발을 할 때 로컬 테스팅을 더 편하게 하기 위해 Docker-Compose를 이용하고자 한다.

  참고: https://docs.docker.com/compose/

#### Text Editior 관련

  Notion의 Rich Text Editor 기능을 구현하기 위해 2가지 전략을 검토 중이다.

  - Markdown Parser
    
    마크다운 텍스트를 html로 변환해주는 라이브러리들이 있다.
    Notion처럼 WYSIWYG Editor로서 사용하기 위해서는 추가적인 wrapping 작업이 필요해 보인다.
    대신에 UI/UX 구성에 더 높은 자유도를 가질 수 있을 것 같다.

    - [markdown-it](https://github.com/markdown-it/markdown-it)
      - github stars: 11.6k
      - 문서 페이지가 따로 있다. (https://markdown-it.github.io/markdown-it/)
      - CommonMark spec을 따르기 때문에 GFM(Github Flavored Markdown)과도 충돌하지 않을 것으로 보인다.

    - [showdown](https://github.com/showdownjs/showdown)
      - github stars: 11.7k
      - 문서 페이지가 아직 없다.
      - CommonMark spec과 완전히 Compliant 하지 않다.
        - list indentation의 단위가 4 spaces이다.
      - 양방향 변환을 지원한다.
        - .makeHtml()
        - .makeMarkdown()
    
    참고: https://css-tricks.com/choosing-right-markdown-parser/

  - Rich Text Editor

    어차피 WYSIWYG 에디터를 필요로 한다면, 이미 그 용도로 개발된 라이브러리를 사용하는 것이 편할 것 같기도 하다.
    하지만 필요하지 않은 부분을 쳐내는 노력이 들고, UI/UX 면에서 자유도가 낮을 수도 있다.

    - [CKEditor](https://ckeditor.com/)
      - 유료다.
      - 완벽한 WYSIWYG UX를 만들기 위해서 노력한다고 하니, 어떤 기능이 있는지 참고를 하기 위해 살펴보면 좋을 것 같다.
      - Export to PDF 등의 편리한 기능도 탑재되어 있다. (하지만 유료다)
    - [Quilljs](https://quilljs.com/)
      - 오픈 소스 프로젝트
      - 사용하기 쉽다고 한다.
      - markdown 라이브러리와 함께 이용하면 마크다운 문법으로도 텍스트를 작성할 수 있어 보인다.
        - 참고: https://codepen.io/voziv/pen/rmpVZb/
    

## Backend
- Typescript
- Express
