import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../test';
import { Driving }          from '../pages/driving/driving';
import { By }           from '@angular/platform-browser';

let fixture: ComponentFixture<Driving> = null;
let instance: any = null;

describe('Pages: HelloIonic', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([Driving]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create the hello ionic page', async(() => {
    expect(instance).toBeTruthy();
  }));
});