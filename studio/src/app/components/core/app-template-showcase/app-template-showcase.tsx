import {Component, Prop, h, State} from '@stencil/core';

import {Template, TemplateDataSlot} from '../../../models/data/template';

import {Utils} from '../../../utils/core/utils';

@Component({
  tag: 'app-template-showcase',
  styleUrl: 'app-template-showcase.scss',
})
export class AppTemplateShowcase {
  @Prop()
  template: Template;

  @State()
  private loaded: boolean = false;

  async componentDidLoad() {
    await Utils.injectJS({
      id: `${this.template.data.tag}-script`,
      src: this.template.data.cdn,
      module: true,
    });

    this.loaded = true;
  }

  private async blockSlide($event: CustomEvent) {
    await ($event?.target as HTMLDeckgoDeckElement).blockSlide(true);
  }

  render() {
    return <ion-card class="ion-no-margin">{this.loaded ? this.renderTemplate() : this.renderSpinner()}</ion-card>;
  }

  private renderTemplate() {
    const Element = this.template.data.tag;

    return (
      <deckgo-deck embedded={true} keyboard={false} onSlidesDidLoad={($event: CustomEvent) => this.blockSlide($event)}>
        <Element>
          {this.template.data.slots.map((slot: TemplateDataSlot) => {
            return <h1 slot={slot.name}>Hello</h1>;
          })}
        </Element>
      </deckgo-deck>
    );
  }

  private renderSpinner() {
    return (
      <div class="spinner">
        <ion-spinner color="medium"></ion-spinner>
        <ion-label>Loading...</ion-label>
      </div>
    );
  }
}
