/**
 * @vitest-environment jsdom
 */
import fs from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PwaInstallBanner, PwaInstallActionCard } from '../src/components/PwaInstallBanner';

describe('PWA & Mobile Setup Unit Tests', () => {
  it('validates public/manifest.json structure', () => {
    const manifestPath = path.resolve(__dirname, '../public/manifest.json');
    expect(fs.existsSync(manifestPath)).toBe(true);

    const manifestContent = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    expect(manifestContent.name).toBe('Ledger');
    expect(manifestContent.short_name).toBe('Ledger');
    expect(manifestContent.display).toBe('standalone');
    expect(manifestContent.theme_color).toBe('#0f172a');
    expect(manifestContent.icons.length).toBeGreaterThan(0);
  });

  it('validates public/sw.js service worker implementation', () => {
    const swPath = path.resolve(__dirname, '../public/sw.js');
    expect(fs.existsSync(swPath)).toBe(true);

    const swContent = fs.readFileSync(swPath, 'utf-8');
    expect(swContent).toContain("addEventListener('install'");
    expect(swContent).toContain("addEventListener('activate'");
    expect(swContent).toContain("addEventListener('fetch'");
  });

  it('validates index.html includes manifest and service worker script', () => {
    const htmlPath = path.resolve(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    expect(htmlContent).toContain('rel="manifest"');
    expect(htmlContent).toContain('navigator.serviceWorker.register');
    expect(htmlContent).toContain('apple-mobile-web-app-capable');
  });

  it('renders PwaInstallBanner with install call to action', () => {
    render(<PwaInstallBanner />);
    expect(screen.getByText(/Usar no Celular sem Navegador/i)).toBeTruthy();
    expect(screen.getByText(/Instalar no Celular/i)).toBeTruthy();
  });

  it('renders PwaInstallActionCard in backup modal', () => {
    render(<PwaInstallActionCard />);
    expect(screen.getByText(/Instalação no Celular \(PWA\)/i)).toBeTruthy();
    expect(screen.getByText(/Instalar na Tela Inicial/i)).toBeTruthy();
  });

  it('validates Capacitor Android native project configuration', () => {
    const configPath = path.resolve(__dirname, '../capacitor.config.ts');
    expect(fs.existsSync(configPath)).toBe(true);

    const configContent = fs.readFileSync(configPath, 'utf-8');
    expect(configContent).toContain('com.financeledger.app');
    expect(configContent).toContain('Ledger');

    const androidDir = path.resolve(__dirname, '../android');
    expect(fs.existsSync(androidDir)).toBe(true);
    expect(fs.existsSync(path.join(androidDir, 'build.gradle'))).toBe(true);
    expect(fs.existsSync(path.join(androidDir, 'app/src/main/AndroidManifest.xml'))).toBe(true);
  });
});
