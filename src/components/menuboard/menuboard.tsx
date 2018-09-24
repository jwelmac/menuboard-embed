import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ms-menuboard-embed',
  styleUrl: 'menuboard.scss',
  shadow: true
})
export class MenuboardEmbedComponent {

  @Prop() auth_key: string;
  @Prop() provider: string = 'synergy';

  render() {
    return (
      <div class="ms-menuboard-embed">
        <iframe src={`https://menuboard.live.menustreams.com/?app=${this.provider}&auth_key=${this.auth_key}`} frameborder="0"></iframe>
      </div>
    );
  }
}
