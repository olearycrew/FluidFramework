/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { PrimedComponentFactory } from "@microsoft/fluid-aqueduct";
import { IComponentFactory } from "@microsoft/fluid-runtime-definitions";
import { SharedString } from "@microsoft/fluid-sequence";
import { TextListName } from "./TextList";
import { TextList } from "./index";

export const TextListInstantiationFactory: IComponentFactory = new PrimedComponentFactory(
    TextListName,
    TextList,
    [
        SharedString.getFactory(),
    ],
);
