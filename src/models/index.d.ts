import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAudioRec = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AudioRec, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly txt?: string | null;
  readonly imageUrl?: string | null;
  readonly audioUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAudioRec = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AudioRec, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly txt?: string | null;
  readonly imageUrl?: string | null;
  readonly audioUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AudioRec = LazyLoading extends LazyLoadingDisabled ? EagerAudioRec : LazyAudioRec

export declare const AudioRec: (new (init: ModelInit<AudioRec>) => AudioRec) & {
  copyOf(source: AudioRec, mutator: (draft: MutableModel<AudioRec>) => MutableModel<AudioRec> | void): AudioRec;
}