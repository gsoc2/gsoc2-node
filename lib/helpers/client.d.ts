import Gsoc2Client from '../client/Gsoc2Client';
import { GetAllOptions, GetOptions, CreateOptions, UpdateOptions, DeleteOptions } from '../types/Gsoc2Client';
import { ISecretBundle } from '../types/models';
export declare function getSecretHelper(instance: Gsoc2Client, secretName: string, options: GetOptions): Promise<ISecretBundle>;
export declare function getAllSecretsHelper(instance: Gsoc2Client, options: GetAllOptions): Promise<ISecretBundle[]>;
export declare function createSecretHelper(instance: Gsoc2Client, secretName: string, secretValue: string, options: CreateOptions): Promise<ISecretBundle>;
export declare function updateSecretHelper(instance: Gsoc2Client, secretName: string, secretValue: string, options: UpdateOptions): Promise<ISecretBundle>;
export declare function deleteSecretHelper(instance: Gsoc2Client, secretName: string, options: DeleteOptions): Promise<ISecretBundle>;
