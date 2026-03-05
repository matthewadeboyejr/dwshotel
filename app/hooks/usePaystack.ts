'use client';

import { toast } from 'sonner';

declare global {
    interface Window {
        PaystackPop: any;
    }
}

interface PaystackConfig {
    email: string;
    amount: number; // in kobo (NGN * 100)
    reference: string;
    onSuccess: (reference: { reference: string; trans: string; status: string; message: string; transaction: string }) => void;
    onClose: () => void;
}

function showLoader() {
    const overlay = document.createElement('div');
    overlay.id = 'paystack-loader';
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 99999;
        background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
        display: flex; align-items: center; justify-content: center;
        flex-direction: column; gap: 16px;
    `;
    overlay.innerHTML = `
        <div style="width:48px;height:48px;border:4px solid rgba(255,255,255,0.2);border-top-color:#22c55e;border-radius:50%;animation:spin 0.8s linear infinite"></div>
        <p style="color:white;font-size:16px;font-weight:600">Loading payment gateway...</p>
        <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
    `;
    document.body.appendChild(overlay);
}

function hideLoader() {
    document.getElementById('paystack-loader')?.remove();
}

export function usePaystack() {
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

    const initializePayment = (config: PaystackConfig) => {
        const loadScript = (): Promise<void> => {
            return new Promise((resolve, reject) => {
                if (window.PaystackPop) {
                    resolve();
                    return;
                }
                const script = document.createElement('script');
                script.src = 'https://js.paystack.co/v1/inline.js';
                script.onload = () => resolve();
                script.onerror = () => reject(new Error('Failed to load Paystack'));
                document.head.appendChild(script);
            });
        };

        showLoader();

        loadScript().then(() => {
            hideLoader();
            const handler = window.PaystackPop.setup({
                key: publicKey,
                email: config.email,
                amount: config.amount,
                currency: 'NGN',
                ref: config.reference,
                callback: (response: any) => {
                    config.onSuccess(response);
                },
                onClose: () => {
                    config.onClose();
                },
            });
            handler.openIframe();
        }).catch((err) => {
            hideLoader();
            console.error('Paystack load error:', err);
            toast.error('Failed to load payment gateway. Please try again.');
        });
    };

    return { initializePayment };
}
