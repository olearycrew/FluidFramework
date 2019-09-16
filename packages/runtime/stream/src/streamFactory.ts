/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { IChannelAttributes, IComponentRuntime, ISharedObjectServices } from "@prague/runtime-definitions";
import { ISharedObject, ISharedObjectFactory } from "@prague/shared-object-common";
import { pkgVersion } from "./packageVersion";
import { Stream } from "./stream";

/**
 * Factory for Streams.
 */
export class StreamFactory implements ISharedObjectFactory {
    /**
     * Static type identifier.
     */
    public static Type = "https://graph.microsoft.com/types/stream";

    public static Attributes: IChannelAttributes = {
        type: StreamFactory.Type,
        snapshotFormatVersion: "0.2",
        packageVersion: pkgVersion,
    };

    public get type() {
        return StreamFactory.Type;
    }

    public get attributes() {
        return StreamFactory.Attributes;
    }

    /**
     * Creates a new Stream object and loads it with data from the given services.
     *
     * @param runtime - The ComponentRuntime that this stream will be associated with
     * @param id - Unique ID for the new stream
     * @param services - Services with the object storage to load from
     * @param branchId - branch ID (not used)
     */
    public async load(
        runtime: IComponentRuntime,
        id: string,
        services: ISharedObjectServices,
        branchId: string): Promise<ISharedObject> {

        const stream = new Stream(runtime, id);
        await stream.load(branchId, services);

        return stream;
    }

    /**
     * Creates a new empty Stream object.
     *
     * @param runtime - The ComponentRuntime that this stream will be associated with
     * @param id - Unique ID for the new stream
     */
    public create(runtime: IComponentRuntime, id: string): ISharedObject {
        const stream = new Stream(runtime, id);
        stream.initializeLocal();

        return stream;
    }
}